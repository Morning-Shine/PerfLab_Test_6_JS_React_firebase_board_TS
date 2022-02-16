import React from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Loader from "./components/Loader";
import Paper from "@mui/material/Paper";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { lightMode } from "./assets/uiThemes/lightMode";
import { darkMode } from "./assets/uiThemes/darkMode";

function App() {
  const themeProp = useSelector(state => state.theme.currentTheme);

  let theme;
  switch (themeProp) {
    case "dark":
      theme = darkMode;
      break;
    case "light":
      theme = lightMode;
      break;
  }

  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  let render;
  loading
    ? 
      (render = (
        <div className="AppLoader">
          <Loader />
        </div>
      ))
    : (render = (
        <div className="App">
          <AppRouter />
        </div>
      ));

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }} elevation={0} sx={{ borderRadius: 0 }}>
        {render}
      </Paper>
    </ThemeProvider>
  );
}

export default App;
