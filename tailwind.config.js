/**
 * @type {import('tailwindcss').Config}*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            dark: "#0b0b0t",
            fog: "#d4d4d4",
            blood: "#6b0000",
        },
    },
  },
  plugins: [],
};