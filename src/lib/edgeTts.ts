import WebSocket from 'ws';
import crypto from 'crypto';

const TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
const WIN_EPOCH = 11644473600;
const CHROMIUM_FULL_VERSION = "143.0.3650.75";
const CHROMIUM_MAJOR_VERSION = "143";
const SEC_MS_GEC_VERSION = `1-${CHROMIUM_FULL_VERSION}`;

function generateSecMsGec(): string {
  let ticks = Date.now() / 1000;
  ticks += WIN_EPOCH;
  ticks -= ticks % 300;
  ticks *= 1e7;
  const strToHash = `${ticks.toFixed(0)}${TRUSTED_CLIENT_TOKEN}`;
  return crypto.createHash('sha256').update(strToHash, 'ascii').digest('hex').toUpperCase();
}

function generateMuid(): string {
  return crypto.randomBytes(16).toString('hex').toUpperCase();
}

function generateConnectionId(): string {
  return crypto.randomUUID().replace(/-/g, '');
}

/**
 * Convert playback rate (e.g., 0.8 to 1.5) to Edge TTS prosody rate string (+20%, -10%, etc.)
 */
function formatProsodyRate(rate: number): string {
  if (!rate || rate === 1) return "+0%";
  const percent = Math.round((rate - 1) * 100);
  return percent >= 0 ? `+${percent}%` : `${percent}%`;
}

/**
 * Escapes special XML characters for SSML safely
 */
function escapeSsml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export interface EdgeTtsOptions {
  voice?: string;
  rate?: number; // 0.5 to 2.0
  pitch?: string;
  timeoutMs?: number;
}

/**
 * Synthesizes Vietnamese/multilingual speech using Microsoft Edge Neural TTS
 * Completely free, high-fidelity neural audio without requiring an API key.
 */
export async function synthesizeEdgeTTS(
  text: string,
  options: EdgeTtsOptions = {}
): Promise<Buffer> {
  const voice = options.voice || "vi-VN-HoaiMyNeural";
  const rateStr = formatProsodyRate(options.rate || 1.0);
  const pitchStr = options.pitch || "+0Hz";
  const timeoutMs = options.timeoutMs || 15000;

  return new Promise((resolve, reject) => {
    const secMsGec = generateSecMsGec();
    const connectionId = generateConnectionId();
    const url = `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${TRUSTED_CLIENT_TOKEN}&Sec-MS-GEC=${secMsGec}&Sec-MS-GEC-Version=${SEC_MS_GEC_VERSION}&ConnectionId=${connectionId}`;

    const headers = {
      "User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${CHROMIUM_MAJOR_VERSION}.0.0.0 Safari/537.36 Edg/${CHROMIUM_MAJOR_VERSION}.0.0.0`,
      "Accept-Encoding": "gzip, deflate, br, zstd",
      "Accept-Language": "en-US,en;q=0.9",
      "Pragma": "no-cache",
      "Cache-Control": "no-cache",
      "Origin": "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold",
      "Sec-WebSocket-Version": "13",
      "Cookie": `muid=${generateMuid()};`
    };

    let ws: WebSocket;
    try {
      ws = new WebSocket(url, { headers });
    } catch (err) {
      return reject(err);
    }

    const audioChunks: Buffer[] = [];
    const requestId = crypto.randomUUID().replace(/-/g, '');

    const timeout = setTimeout(() => {
      try { ws.close(); } catch (_) {}
      reject(new Error(`Edge TTS synthesis timed out after ${timeoutMs}ms`));
    }, timeoutMs);

    ws.on('open', () => {
      const timestamp = new Date().toISOString();
      const configMessage = 
        `X-Timestamp:${timestamp}\r\n` +
        `Content-Type:application/json; charset=utf-8\r\n` +
        `Path:speech.config\r\n\r\n` +
        JSON.stringify({
          context: {
            synthesis: {
              audio: {
                metadataoptions: {
                  sentenceBoundaryEnabled: "false",
                  wordBoundaryEnabled: "false"
                },
                outputFormat: "audio-24khz-48kbitrate-mono-mp3"
              }
            }
          }
        });
      ws.send(configMessage);

      const escapedText = escapeSsml(text);
      const ssml = 
        `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='vi-VN'>` +
        `<voice name='${voice}'>` +
        `<prosody pitch='${pitchStr}' rate='${rateStr}' volume='+0%'>` +
        escapedText +
        `</prosody></voice></speak>`;

      const ssmlMessage = 
        `X-RequestId:${requestId}\r\n` +
        `Content-Type:application/ssml+xml\r\n` +
        `X-Timestamp:${timestamp}Z\r\n` +
        `Path:ssml\r\n\r\n` +
        ssml;
      ws.send(ssmlMessage);
    });

    ws.on('message', (data: WebSocket.RawData) => {
      const buf = Buffer.isBuffer(data) ? data : Buffer.from(data as any);
      if (buf.length >= 2) {
        const headerLength = buf.readUInt16BE(0);
        if (headerLength > 0 && headerLength < buf.length) {
          const headerStr = buf.subarray(2, 2 + headerLength).toString('utf-8');
          if (headerStr.includes("Path:audio")) {
            if (headerStr.includes("Content-Type:audio/mpeg")) {
              const audioData = buf.subarray(2 + headerLength);
              if (audioData.length > 0) {
                audioChunks.push(audioData);
              }
            }
            return;
          }
        }
      }

      // Check text / control messages
      const textStr = buf.toString('utf-8');
      if (textStr.includes("Path:turn.end")) {
        clearTimeout(timeout);
        try { ws.close(); } catch (_) {}
        const finalBuffer = Buffer.concat(audioChunks);
        if (finalBuffer.length === 0) {
          reject(new Error("Edge TTS finished but no audio data was received"));
        } else {
          resolve(finalBuffer);
        }
      }
    });

    ws.on('error', (err: Error) => {
      clearTimeout(timeout);
      reject(err);
    });

    ws.on('close', (code: number, reason: Buffer) => {
      clearTimeout(timeout);
      if (audioChunks.length > 0) {
        resolve(Buffer.concat(audioChunks));
      } else if (code !== 1000) {
        reject(new Error(`Edge TTS WebSocket closed with code ${code}: ${reason.toString()}`));
      }
    });
  });
}
