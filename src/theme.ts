import { createTheme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    white: Palette["primary"];
    black: Palette["primary"];
    orange: Palette["primary"];
    drWalletNavy: Palette["primary"];
    parkvoltYellow: Palette["primary"];
    plantwellGreen: Palette["primary"];
    sanitariumBlue: Palette["primary"];
    secondary: Palette["primary"];
    textMain: Palette["primary"];
  }
  interface PaletteOptions {
    white?: PaletteOptions["primary"];
    black?: PaletteOptions["primary"];
    orange?: PaletteOptions["primary"];
    drWalletNavy?: PaletteOptions["primary"];
    parkvoltYellow?: PaletteOptions["primary"];
    plantwellGreen?: PaletteOptions["primary"];
    sanitariumBlue?: PaletteOptions["primary"];
    secondary?: PaletteOptions["primary"];
    textMain?: PaletteOptions["primary"];
  }

  interface TypographyVariants {
    mainHeading: React.CSSProperties;
    title: React.CSSProperties;
    body: React.CSSProperties;
    button: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    mainHeading?: React.CSSProperties;
    title?: React.CSSProperties;
    body?: React.CSSProperties;
    button?: React.CSSProperties;
  }
}

// Allow usage of custom variants in Typography's `variant` prop
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    mainHeading: true;
    title: true;
    body: true;
    button: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    mainHeading: {
      fontSize: "21.875rem",
      lineHeight: 0.94,
      letterSpacing: "-0.07em",
      fontWeight: 800
    },
    h1: {
      fontSize: "6.25rem",
      lineHeight: 1.004,
      letterSpacing: "-0.06em",
      fontWeight: 900
    },
    h2: {
      fontSize: "2rem",
      lineHeight: "normal",
      letterSpacing: "-0.06em",
      fontWeight: 700
    },
    title: {
      fontSize: "1.25rem",
      lineHeight: 0.24,
      letterSpacing: "0",
      fontWeight: 700
    },
    body: {
      fontSize: "1.125rem",
      lineHeight: "normal",
      letterSpacing: "0",
      fontWeight: 400
    },
    button: {
      fontSize: "1.125rem", // 18px
      lineHeight: "1.25", // 125%
      letterSpacing: "-0.06em", // -6%
      fontWeight: "600" // semi bold
    }
  },
  palette: {
    white: { main: "#FFFFFF" },
    primary: { main: "#FFFFFF" },
    secondary: { main: "#B9C3E7" },
    tertiary: {
      light: "#E0785B",
      dark: "#B14021"
    },
    textMain: { main: "#2B1E1A" },
    orange: { main: "#D8532F" },
    black: { main: "#2B1E1A" },
    drWalletNavy: { main: "#050726" },
    parkvoltYellow: { main: "#FAD853" },
    plantwellGreen: { main: "#39762D" },
    sanitariumBlue: { main: "#1250D6" }
  }
} as ThemeOptions);
