import React from "react";

import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { BarChart, Layers, People } from "@mui/icons-material";
import {Link,  Outlet} from "react-router-dom";

const Sidebar = () => {

  return (
    <Box
      overflowY={'scroll'}
      sx={{
        display: { xs: "none", sm: "block" },
        flex: {
          xs: 0,
          sm: 1,
          md: 1,
        },
      }}
    >
      <Link to="/dashboard/app" underline="none">
        <ListItemButton sx={{ borderRadius: "10px" }} >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link> 

      <Link to="/dashboard/student" underline="none" color="primary">
        <ListItemButton sx={{ borderRadius: "10px" }} >
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Students" />
        </ListItemButton>
      </Link>

      <Link to="/dashboard/report" underline="none" color="primary">
        <ListItemButton sx={{ borderRadius: "10px" }} >
          <ListItemIcon>
            <BarChart />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
      </Link>

      <Link to="/dashboard/inte" underline="none" color="primary">
        <ListItemButton sx={{ borderRadius: "10px" }} >
          <ListItemIcon>
            <Layers />
          </ListItemIcon>
          <ListItemText primary="Integrations" />
        </ListItemButton>
      </Link>

      <Outlet/>
    </Box>
    
  );
};

export default Sidebar;
