import { createTheme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    white: Palette["primary"];
    black: Palette["primary"];
    orange: Palette["primary"];
  }
  interface PaletteOptions {
    white?: PaletteOptions["primary"];
    black?: PaletteOptions["primary"];
    orange?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: ["Inter"].join(",")
  },
  palette: {
    white: { main: "#FFFFFF" },
    orange: { main: "#D8532F" },
    black: { main: "#2B1E1A" }
  }
} as ThemeOptions);
