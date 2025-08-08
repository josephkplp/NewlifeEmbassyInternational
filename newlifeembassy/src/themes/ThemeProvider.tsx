import { ThemeProvider } from "@emotion/react";
import { createContext, useContext, useMemo, useState } from "react";
import { darkThemes, lightThemes } from "./themes";

type Mode = "light" | "dark";

export interface ThemeContextType {
  Mode: Mode;
  toggleTheme: () => void;
}

const ThemeToggleContext = createContext({
  Mode: "light" as Mode,
  toggleTheme: () => {},
});

export const useThemeToggle = () => useContext(ThemeToggleContext);

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<Mode>("light");
  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => {
    return mode === "light" ? lightThemes : darkThemes;
  }, [mode]);

  return (
    <ThemeToggleContext.Provider value={{ Mode: mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
