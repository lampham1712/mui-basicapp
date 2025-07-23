import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import {
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
} from "@mui/icons-material";

const Navigation = ({ darkMode, onToggleDarkMode }) => {
  return (
    <AppBar position="static" elevation={2}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Job Board
        </Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          onClick={onToggleDarkMode}
          aria-label="toggle dark mode"
        >
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
