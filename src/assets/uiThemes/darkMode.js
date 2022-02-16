import { createTheme } from "@mui/material/styles";

export const darkMode = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ['"Inter"'].join(","),
    // allVariants: {
    //   color: "#DDE2FF",
    // },
  },
});
