import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F8FA",
        surface: "#FFFFFF",
        ink: "#12161C",
        steel: "#5B6472",
        hairline: "#DDE1E6",
        navy: {
          DEFAULT: "#1E3A5F",
          dark: "#152B47",
        },
        signal: {
          DEFAULT: "#2F6FED",
          dark: "#2558C4",
          light: "#EAF1FD",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "perf-edge":
          "repeating-linear-gradient(to bottom, transparent 0px, transparent 6px, #DDE1E6 6px, #DDE1E6 7px)",
      },
    },
  },
  plugins: [],
};
export default config;
