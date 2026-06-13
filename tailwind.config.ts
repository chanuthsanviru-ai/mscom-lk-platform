import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"]
      },
      colors: {
        emerald: {
          950: "#06261f"
        },
        gold: {
          50: "#fff9e8",
          100: "#ffefbf",
          400: "#d8a72e",
          500: "#b98916"
        },
        ink: "#071612"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(12, 96, 70, 0.22)"
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
