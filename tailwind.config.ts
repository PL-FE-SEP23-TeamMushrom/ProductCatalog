import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font: ["Mont", "sans-serif"],
      },
      fontSize: {
        "22px": "22px",
        "32": "32px",
      },
      width: {
        "40": "40px",
        "160": "160px",
        "208": "208px",
        "272": "272px",
        "320": "320px",
        "336": "336px",
        "400": "400px",
        "544": "544px",
        "600": "600px",
        "1100": "1100px",
        "1150": "1150px",
        cartImage: "66px",
      },
      height: {
        "40": "40px",
        "48": "48px",
        "58": "58px",
        "96": "96px",
        "192": "192px",
        "196": "196px",
        "506": "506px",
        cartImage: "66px",
      },
      colors: {
        "primary-color": "#313237",
        "secondary-color": "#89939A",
        "icon-color": "#B4BDC3",
        "elements-color": "#E2E6E9",
      },
      margin: {
        "23": "23px",
        "25": "25px",
        "69": "276px",
      },
      gridTemplateColumns: {
        desktop: "repeat(24, 32px)",
        tablet: "repeat(12, minmax(0, 1fr))",
        mobile: "repeat(4, minmax(0, 1fr))",
      },
      gridAutoRows: {
        desktop: "128px",
        tablet: "128px",
        mobile: "160px",
      },
      gap: {
        gap: "16px",
      },
      screens: {
        xs: "475px",
        desktop: "1200px",
        tablet: "640px",
      },
      gridColumn: {
        "span-16": "span 16 / span 16",
      },
      gridColumnStart: {
        "17": "17",
      },
      lineHeight: {
        "21": "21px",
        "41": "41px",
        "56": "56px",
      },
    },
  },
  plugins: [],
};
export default config;
