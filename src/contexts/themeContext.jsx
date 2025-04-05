import { createContext } from "react";
import CONSTANTS from "../constansts";

const { LIGHT } = CONSTANTS.THEME;

export const ThemeContext = createContext({
  theme: LIGHT,
  setTheme: () => {},
});
