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
        primary: "#FFFFFF",
        secondary: "#D8532F",
        tertiary: {
          light: "#E0785B",
          dark: "#B14021"
        },
        textMain: "#2B1E1A",
        orange: "#D8532F",
        // Design Product Colours
        navy: { drWallet: "#050726" },
        yellow: { parkvolt: "#FAD853" },
        green: { plantwell: "#39762D" },
        blue: { sanitarium: "#1250D6" }
      },
      fontSize: {
        mainHeading: [
          "21.875rem",
          {
            lineHeight: "0.94",
            letterSpacing: "-0.07em",
            fontWeight: "800"
          }
        ],

        h1: [
          "6.25rem",
          {
            lineHeight: "1.004",
            letterSpacing: "-0.06em",
            fontWeight: "900"
          }
        ],

        h2: [
          "2rem",
          {
            lineHeight: "normal",
            letterSpacing: "-0.06em",
            fontWeight: "700"
          }
        ],

        title: [
          "1.25rem",
          {
            lineHeight: "0.24",
            letterSpacing: "0",
            fontWeight: "700"
          }
        ],

        body: [
          "1.125rem",
          {
            lineHeight: "normal",
            letterSpacing: "0",
            fontWeight: "400"
          }
        ]
      }
    }
  }
};
