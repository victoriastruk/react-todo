import { useTheme } from "../contexts/themeContext.jsx";
import { Sun, Moon } from "lucide-react";
import styles from "./ThemeToggle.module.sass";
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className={styles.btn} onClick={toggleTheme}>
      {" "}
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}

export default ThemeToggle;
