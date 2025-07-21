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
}

export const theme = createTheme({
  typography: {
    fontFamily: ["Inter"].join(",")
  },
  palette: {
    white: { main: "#FFFFFF" },
    orange: { main: "#D8532F" },
    black: { main: "#2B1E1A" },
    drWalletNavy: { main: "#050726" },
    parkvoltYellow: { main: "#FAD853" },
    plantwellGreen: { main: "#39762D" },
    sanitariumBlue: { main: "#1250D6" },
    secondary: { main: "#B9C3E7" },
    textMain: { main: "#2B1E1A" }
  }
} as ThemeOptions);
