import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import logo from "../assets/img/logo.png";
import { createTheme } from "@mui/material/styles"; //ПОКРАСИТЬ
import { Paper } from "@mui/material";
import SideBarItems from "./SideBarItems";
import styled from "@emotion/styled";

export const drawerWidth = 255;

//TODO сворачивание при размере экрана <=1280px (только иконки и лого) + подсказка при наведении
// константа на ширину бара в экране с тикетами и др.
export default function SideBar() {
  return (
    <Div>
      <Drawer
        sx={{
          width: drawerWidth,
          // backgroundColor: "#363740",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Paper
          style={{ height: "100vh", background: "#363740" }}
          elevation={0}
          sx={{ borderRadius: 0 }}
        >
          <Toolbar
            variant="string"
            sx={{
              paddingY: "37px",
            }}
          >
            <Avatar
              alt="logo"
              src={logo}
              sx={{ width: 40, height: 40, marginLeft: "8px" }}
            />
            <Typography
              sx={{
                fontSize: 19,
                paddingLeft: "12px",
                color: "#DDE2FF",
              }}
            >
              Dashboard Kit
            </Typography>
          </Toolbar>
          <SideBarItems />
        </Paper>
      </Drawer>
    </Div>
  );
}

const Div = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
`;
