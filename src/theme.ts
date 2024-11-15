import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Inter"].join(",")
  },
  palette: {
    white: {
      main: "#FFFFFF"
    },
    lavender: {
      main: "#B9C3E7"
    },
    black: {
      main: "#231F21"
    },
    oldyellow: {
      main: "#B9C3E7"
    }
  }
});
