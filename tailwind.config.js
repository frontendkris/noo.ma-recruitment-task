/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-gray": "#666666",
        "brand-gray-light": "#9E9E9E",
        "brand-gray-dark": "#393939",
      },
    },
  },
  plugins: [],
}
