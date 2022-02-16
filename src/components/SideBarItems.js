import React from "react";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Typography from "@mui/material/Typography";
import BarChartIcon from "@mui/icons-material/BarChart";
import { privateRoutes } from "../views/routs";
import { Link } from "react-router-dom";


export default function SideBarItems() {
  const menuItems = [
    {
      text: "Dashboard",
      icon: <BarChartIcon />,
      routing: undefined,
      isActivePath: undefined,
    },
    {
      text: "Tickets",
      icon: <ListAltIcon />,
      routing: undefined,
      isActivePath: undefined,
    },
  ];

  menuItems.forEach(
    item =>
      (item.routing = privateRoutes.find(
        route => route.path.slice(1).toLowerCase() == item.text.toLowerCase()
      )?.path)
  );

  menuItems.forEach(
    item => (item.isActivePath = item.routing == window.location.pathname)
  );

  return (
      <List>
        {menuItems.map(li => (
          <Link to={li.routing} key={li.routing}>
            <ListItem
              button
              key={li.text}
              sx={{ height: "56px" }}
              disabled={li.isActivePath}
            >
              <ListItemIcon
                sx={{
                  color: "#DDE2FF",
                }}
              >
                {li.icon}
              </ListItemIcon>
              <Typography
                sx={{
                  color: "#DDE2FF",
                }}
              >
                {li.text}
              </Typography>
            </ListItem>
          </Link>
        ))}
      </List>
  );
}