import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../../contexts/themeContext.jsx";
import CONSTANTS from "../../constansts.js";

import styles from "./ThemeToggle.module.sass";
function ThemeToggleBtn() {
  const { LIGHT, DARK } = CONSTANTS.THEME;
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prev) => (prev === LIGHT ? DARK : LIGHT));
  };
  return (
    <button className={styles.btn} onClick={toggleTheme}>
      {theme === LIGHT ? <Moon /> : <Sun />}
    </button>
  );
}

export default ThemeToggleBtn;
