import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hazard: "#facc15", // Your signature yellow
        dark: "#050505", // Deep industrial black
        grey: "#71717a",
        terminal: "rgba(10, 10, 12, 0.95)",
        dim: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
      },
      animation: {
        "active-status": "active-glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        "active-glow-pulse": {
          "0%, 100%": {
            opacity: "0.6",
            textShadow: "0 0 0px rgba(250, 204, 21, 0)",
          },
          "50%": {
            opacity: "1",
            textShadow: "0 0 15px rgba(250, 204, 21, 0.9)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
