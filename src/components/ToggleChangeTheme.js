import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/themeSlice";


export default function ToggleChangeTheme() {
  const dispatch = useDispatch();
  const btnState = useSelector(state => state.theme.blockedBtn);

  let blockedMoon;
  let BlockedSun;

  switch (btnState) {
    case "moon":
      blockedMoon = true;
      BlockedSun = false;
      break;
    case "sun":
      blockedMoon = false;
      BlockedSun = true;
      break;
  }
  const turnOnSun = () => {
    dispatch(
      setTheme({
        theme: "light",
        themeBtnBlocked: "sun",
      })
    );
  };
  const turnOnMoon = () => {
    dispatch(
      setTheme({
        theme: "dark",
        themeBtnBlocked: "moon",
      })
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
      }}
      >
      <IconButton
        onClick={turnOnMoon}
        color="inherit"
        disabled={blockedMoon}
      >
        <DarkModeIcon />
      </IconButton>
      <IconButton
        sx={{ ml: 1 }}
        onClick={turnOnSun}
        color="inherit"
        disabled={BlockedSun}
      >
        <Brightness7Icon />
      </IconButton>
    </Box>
  );
}
