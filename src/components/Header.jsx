import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
    Box,
    Badge,
    styled,
    Avatar,
    Menu,
    MenuItem,
    IconButton,
    Tooltip,
    Divider,
    ListItemIcon,
} from "@mui/material";

//Icon
import {
    Home,
    Logout,
    Mail,
    Notifications,
    PersonAdd,
    Settings,
} from "@mui/icons-material";

import logo from "./vscode.png";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "12px",
    alignItems: "center",
}));

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box >
            <AppBar
                position="stick"
                sx={{ background: "linear-gradient(45deg, #007FFF, #0059D2)", top: 0, zIndex: 999 }}
            >
                <StyledToolbar>
                    <img
                        src={logo}
                        alt="VSCode"
                        style={{
                            maxWidth: 40,
                        }}
                    />
                    <Typography
                        variant="h5"
                        sx={{
                            padding: "0px 20px 0px 20px",
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        Student Infomation Managerment
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            padding: "0px 20px 0px 20px",
                            display: { xs: "block", sm: "none" },
                        }}
                    >
                        S-I-M
                    </Typography>
                    <Icons>
                        <IconButton color="inherit">
                            <Home sx={{ color: "white" }} />
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge badgeContent={100} color="error">
                                <Mail sx={{ color: "white" }} />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="error">
                                <Notifications sx={{ color: "white" }} />
                            </Badge>
                        </IconButton>
                        <Tooltip title="Account settings">
                            <IconButton
                                color="inherit"
                                id="basic-button"
                                aria-controls={open ? "basic-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleClick}
                            >
                                <Avatar
                                    sx={{ width: 32, height: 32 }}
                                    src="https://avatars.githubusercontent.com/u/67590509?v=4"
                                />
                            </IconButton>
                        </Tooltip>
                    </Icons>
                </StyledToolbar>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            "&:before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                    <MenuItem>
                        <Avatar src="https://avatars.githubusercontent.com/u/67590509?v=4" />{" "}
                        Naker Master
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </AppBar>
        </Box>
    );
};

export default Header;
