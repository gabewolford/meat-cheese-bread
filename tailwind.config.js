/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      red: "#8F0516",
      yellow: "#CD8319",
      brown: "#9A5227",
      green: "#44371C",
    },
    extend: {},
  },
  plugins: [],
};
