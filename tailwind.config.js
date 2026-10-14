/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["Vazirmatn", "sans-serif"],
      },
      colors: {
        forest: {
          50: "#f0f7f1",
          100: "#dcebe0",
          200: "#bad5c1",
          300: "#8fb89b",
          400: "#5e9270",
          500: "#3a7450",
          600: "#2a5d3e",
          700: "#1a4d2e",
          800: "#163d25",
          900: "#0f2d1a",
        },
        sage: {
          50: "#f5f8f4",
          100: "#e8efe6",
          200: "#d1e0cd",
          300: "#a8c5a0",
          400: "#8aac84",
          500: "#6b9264",
        },
        cream: {
          50: "#fdfcf9",
          100: "#faf8f3",
          200: "#f5f1e8",
          300: "#ede7d6",
        },
        terracotta: {
          50: "#fdf5f0",
          100: "#f9e6da",
          200: "#f0cbb4",
          300: "#e6a880",
          400: "#d97757",
          500: "#c75c3a",
          600: "#a8492e",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.3s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        "bounce-slow": "bounceSlow 2s infinite",
        "check-pop": "checkPop 0.5s ease-out forwards",
        "spin-slow": "spin 1.5s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        checkPop: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "60%": { transform: "scale(1.2)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
