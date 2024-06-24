/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#333333",
      blue: "#334982",
      grey: "#f3f3f3",
      orange: "#fdb913",
      pink: "#e40087",
      purple: "#782b8f",
      // red: "#dd372f",
      teal: "#00857d",
      white: "#fff",
      red: "#bd202e",
    },
    extend: {
      animation: {
        // "loop-scroll": "loop-scroll 50s linear infinite",
        "infinite-scroll": "infinite-scroll 150s linear infinite",
      },

      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};

