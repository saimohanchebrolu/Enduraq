import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050A1A",
          900: "#0A1128",
          800: "#0F1A3D",
          700: "#16224F",
        },
        brand: {
          50: "#EEF3FF",
          100: "#DCE6FF",
          300: "#8FADFF",
          400: "#5F8BFF",
          500: "#3E6DF5",
          600: "#2E52D9",
          700: "#2540A8",
        },
        accent: {
          violet: "#7C6BF0",
          cyan: "#3FC7E0",
        },
        ink: {
          900: "#0B1220",
          700: "#33405A",
          500: "#5C6B85",
          300: "#98A3B8",
          100: "#E7ECF5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "18px",
        xl: "24px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,18,32,0.04), 0 8px 24px rgba(11,18,32,0.06)",
        cardHover: "0 4px 10px rgba(11,18,32,0.06), 0 20px 40px rgba(11,18,32,0.10)",
        glow: "0 0 0 1px rgba(95,139,255,0.15), 0 20px 60px rgba(62,109,245,0.25)",
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(95,139,255,0.16) 0%, rgba(5,10,26,0) 60%)",
        "hero-radial":
          "radial-gradient(1200px 600px at 15% -10%, rgba(95,139,255,0.20), transparent 60%), radial-gradient(900px 500px at 100% 10%, rgba(124,107,240,0.18), transparent 55%)",
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        floatY: "floatY 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
