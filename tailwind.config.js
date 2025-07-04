/** @type {import('tailwindcss').Config} */
export default {
  prefix: "tw-",
  plugins: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"]
    },
    extend: {
      colors: {
        lavender: "#B9C3E7",
        nearblack: "#151515",
        black: "#231F21",
        oldyellow: "#B9C3E7",
        saniblue: "#064BB1"
      },
      fontSize: {
        "4.5xl": "2.5rem",
        s20lh22: [
          "20px",
          {
            lineHeight: "22px"
          }
        ]
      },
      backgroundImage: {
        "gradient-dr-wallet": "linear-gradient(to bottom, #FFFFFF 0%, #E6F2FF 100%)",
        "gradient-parkvolt": "linear-gradient(to bottom, #F7D849 49%, #27282C 49%)",
        "gradient-plantwell": "linear-gradient(to bottom, #39762D 0%, #39762D 31%, #315929 69%, #221F21 100%)"
      }
    }
  }
};
