import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#407a7b',
        secondary: '#c69b70',
        third: '#f4f3f0',
        gold: '#d5bd38',
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50vh',
        '3/4': '75%',
        'full': '100%',
       },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Lobster', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
