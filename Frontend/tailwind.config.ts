import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "40": "40px",
        "160": "160px",
        "208": "208px",
        "272": "272px",
      },
      height: {
        "40": "40px",
        "58": "58px",
        "192": "192px",
        "196": "196px",
        "506": "506px",
      },
      colors: {
        'primary-color': '#313237',
        'secondary-color': '#89939A',
        'icon-color': '#B4BDC3',
        'elements-color': '#E2E6E9',
      },
      margin: {
        '69': '276px',
      }
    },
  },
  plugins: [],
};
export default config;
