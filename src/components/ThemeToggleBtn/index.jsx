import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../../contexts/themeContext.jsx";

import styles from "./ThemeToggle.module.sass";
function ThemeToggleBtn() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <button className={styles.btn} onClick={toggleTheme}>
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}

export default ThemeToggleBtn;
