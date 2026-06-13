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
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.6s ease-out both",
        "slide-down": "slideDown 0.5s ease-out both",
        "slide-up": "slideUp 0.6s ease-out both",
        "scale-in": "scaleIn 0.5s ease-out both",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "shimmer": "shimmer 2s ease-in-out infinite"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 24px 80px rgba(12, 96, 70, 0.22)" },
          "50%": { boxShadow: "0 24px 120px rgba(12, 96, 70, 0.4)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" }
        }
      }
    }
  },
  plugins: []
};

export default config;
