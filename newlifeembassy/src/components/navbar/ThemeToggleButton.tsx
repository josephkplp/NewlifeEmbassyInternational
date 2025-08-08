import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Button, Tooltip, useTheme } from "@mui/material";
import React from "react";
import { useThemeToggle } from "../../themes/ThemeProvider";

export const ThemeToggleButton: React.FC = () => {
  const { Mode, toggleTheme } = useThemeToggle();
  const isDarkMode = Mode === "dark";
  const handleToggle = () => {
    toggleTheme();
  };
  const value = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
  const theme = useTheme();
  const darkColor = theme.palette.primary.main;
  const lightColor = theme.palette.primary.main;
  const themeColor = isDarkMode ? lightColor : darkColor;
  return (
    <Tooltip title={value} placement="left">
      <Button onClick={handleToggle} sx={{ color: themeColor }}>
        {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
      </Button>
    </Tooltip>
  );
};
