import { createContext } from "react";

type ThemeMode = "light" | "dark";

export interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

export const ThemeToggleContext = createContext({
  themeMode: "light" as ThemeMode,
  toggleTheme: () => {},
});
