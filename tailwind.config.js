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
          accent: "#6C6F75",
          border: "#A8ACB3",
        },
        dark: {
          background: "#131313",
          text: "#FFFFFF",
          accent: "#A9A9A9",
          border: "#F3F4F6",
        },
      },
    },
  },
  plugins: [],
};
