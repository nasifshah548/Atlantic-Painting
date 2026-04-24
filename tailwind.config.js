/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0EA5E9", // Sky Blue
          secondary: "#06B6D4", // Cyan
          accent: "#F97316", // Orange (CTA)
          dark: "#0F172A", // Deep Navy
          light: "#F8FAFC", // Soft Background
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.05)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
