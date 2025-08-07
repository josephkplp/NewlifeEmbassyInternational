// src/context/ThemeContext.tsx
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { darkTheme, lightTheme } from "../themes/themes";
import { ThemeContext } from "./themeHooks";

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Memoize the theme to avoid recreation on every render
  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
