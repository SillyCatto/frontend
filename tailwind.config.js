import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        firasans: ['"Fira Sans"', "sans-serif"],
        source_code_pro: ['"Source Code Pro"', "monospace"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["retro", "dracula"],
  },
};
