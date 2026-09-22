import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neu: {
          bg: "#e6ecf5",
          dark: "#1e293b",
          muted: "#64748b",
          accent: "#2563eb",
          "accent-hover": "#1d4ed8",
          shadowDark: "#c5cee0",
          shadowLight: "#ffffff",
          success: "#10b981",
          warning: "#f59e0b",
          danger: "#ef4444",
        },
      },
      boxShadow: {
        "neu-flat": "7px 7px 15px #c3ccdb, -7px -7px 15px #ffffff",
        "neu-flat-sm": "4px 4px 9px #c3ccdb, -4px -4px 9px #ffffff",
        "neu-flat-xs": "2px 2px 5px #c3ccdb, -2px -2px 5px #ffffff",
        "neu-inset": "inset 5px 5px 10px #c3ccdb, inset -5px -5px 10px #ffffff",
        "neu-inset-sm": "inset 3px 3px 6px #c3ccdb, inset -3px -3px 6px #ffffff",
        "neu-blue": "5px 5px 14px rgba(37, 99, 235, 0.4), -3px -3px 10px rgba(255, 255, 255, 0.8)",
        "neu-blue-pressed": "inset 3px 3px 6px rgba(15, 23, 42, 0.4), inset -2px -2px 6px rgba(255, 255, 255, 0.2)",
      },
      borderRadius: {
        neu: "18px",
        "neu-sm": "12px",
        "neu-lg": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
