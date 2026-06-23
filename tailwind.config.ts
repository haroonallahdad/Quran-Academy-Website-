import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0E7A5F",
          dark: "#0a5c47",
          light: "#12967a",
          50: "#f0fdf8",
          100: "#ccfbef",
          200: "#99f6df",
          500: "#0E7A5F",
          600: "#0a5c47",
          700: "#084a39",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#f0d060",
          dark: "#b8962e",
          50: "#fefce8",
          100: "#fef9c3",
        },
        beige: {
          DEFAULT: "#FAFAF8",
          dark: "#F2F0EB",
        },
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(14, 122, 95, 0.08)",
        "card-hover": "0 12px 40px rgba(14, 122, 95, 0.18)",
        glow: "0 0 40px rgba(14, 122, 95, 0.25)",
        gold: "0 4px 20px rgba(212, 175, 55, 0.3)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0E7A5F 0%, #0a5c47 50%, #063d31 100%)",
        "section-gradient": "linear-gradient(180deg, #FAFAF8 0%, #F2F0EB 100%)",
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #f0d060 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(14,122,95,0.05) 0%, rgba(212,175,55,0.05) 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
