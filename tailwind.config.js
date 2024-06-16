/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#ffffff",
          text: "#404040",
          accent: "#999999",
        },
        dark: {
          background: "#131313",
          text: "#FFFFFF",
          accent: "#999999",
        },
      },
    },
  },
  plugins: [],
};
