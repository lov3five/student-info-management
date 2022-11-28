import React from "react";

import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { BarChart, Layers, People } from "@mui/icons-material";

const Sidebar = () => {

  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block" },
        flex: {
          xs: 0,
          sm: 1,
          md: 1,
        },
      }}
    >
      <ListItemButton sx={{ borderRadius: "10px" }} >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton sx={{ borderRadius: "10px" }} >
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Students" />
      </ListItemButton>
      <ListItemButton sx={{ borderRadius: "10px" }} >
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
      <ListItemButton sx={{ borderRadius: "10px" }} >
        <ListItemIcon>
          <Layers />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
    </Box>
  );
};

export default Sidebar;
