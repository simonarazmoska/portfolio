/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"]
    },
    extend: {
      colors: {
        headerText: "#EAD8FC",
        headerBackground: "#151515"
      },
      fontSize: {
        "4.5xl": "2.5rem",
        s20lh22: [
          "20px",
          {
            lineHeight: "22px"
          }
        ]
      }
    }
  },
  plugins: [],
  prefix: "tw-"
};
