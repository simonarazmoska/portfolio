import { createTheme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    white: Palette["primary"];
    black: Palette["primary"];
    orange: Palette["primary"];
    drNavy: Palette["primary"];
    parkYellow: Palette["primary"];
    plantGreen: Palette["primary"];
    saniBlue: Palette["primary"];
    secondary: Palette["primary"];
    textMain: Palette["primary"];
  }
  interface PaletteOptions {
    white?: PaletteOptions["primary"];
    black?: PaletteOptions["primary"];
    orange?: PaletteOptions["primary"];
    drNavy?: PaletteOptions["primary"];
    parkYellow?: PaletteOptions["primary"];
    plantGreen?: PaletteOptions["primary"];
    saniBlue?: PaletteOptions["primary"];
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
    drNavy: { main: "#050726" },
    parkYellow: { main: "#FAD853" },
    plantGreen: { main: "#39762D" },
    saniBlue: { main: "#1250D6" },
    secondary: { main: "#B9C3E7" },
    textMain: { main: "#2B1E1A" }
  }
} as ThemeOptions);
