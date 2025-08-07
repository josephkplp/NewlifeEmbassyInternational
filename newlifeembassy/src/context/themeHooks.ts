import { createContext, useContext } from "react";


export type ThemeContextType = {
  toggleTheme: () => void;
  isDarkMode: boolean;
};
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error(
      "useThemeContext must be used within a CustomThemeProvider"
    );
  return context;
};
