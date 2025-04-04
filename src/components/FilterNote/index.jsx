import { useState, useContext } from "react";
import { Search } from "lucide-react";
import ThemeToggle from "../ThemeToggleBtn";
import Dropdown from "../DropDown";

import styles from "./FilterNote.module.sass";
import { ThemeContext } from "../../contexts/themeContext";
function FilterNote({ setSearch, selectedFilter, setSelectedFilter }) {
  const { theme } = useContext(ThemeContext);
  const [focus, setFocus] = useState(false);
  return (
    <div className={styles.container}>
      <div
        className={
          theme === "light"
            ? `${styles.inputWrapper} ${focus ? styles.focused : ""}`
            : `${styles.inputWrapperDark} ${focus ? styles.focused : ""}`
        }
      >
        <input
          type="text"
          placeholder="Search note..."
          className={theme === "light" ? styles.input : styles.inputDark}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <Search className={theme === "light" ? styles.icon : styles.iconDark} />
      </div>
      <Dropdown
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <ThemeToggle />
    </div>
  );
}

export default FilterNote;
