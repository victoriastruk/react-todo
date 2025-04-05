import { useState, useEffect } from "react";
import { ThemeContext } from "./themeContext";
import CONSTANTS from "../constansts";

const { LIGHT } = CONSTANTS.THEME;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || LIGHT
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
