/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte}", // Adjust the path according to your project structure
  ],
  darkMode: "class", // Use 'media' if you prefer to follow the user's system preference
  theme: {
    extend: {
      colors: {
        light: {
          background: "#ffffff",
          text: "#000000",
        },
        dark: {
          background: "#000000",
          text: "#C2C2C2",
        },
      },
    },
  },
  plugins: [],
};
