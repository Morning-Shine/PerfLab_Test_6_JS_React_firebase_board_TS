import { createTheme } from "@mui/material/styles";

export const lightMode = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: ['"Inter"'].join(","),
  },
});
