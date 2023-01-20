import * as React from "react";
import { Theme, ThemeContextType } from "../@types/theme";

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const [themeMode, setThemeMode] = React.useState<Theme>("dark");
  return (
    <ThemeContext.Provider
      value={{ theme: themeMode, changeTheme: setThemeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
