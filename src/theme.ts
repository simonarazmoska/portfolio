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
      main: "#EAD8FC"
    }
  }
});
