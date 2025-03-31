import ThemeToggle from "../ThemeToggle";
import { useState, useContext } from "react";
import { Search } from "lucide-react";
import { ThemeContext } from "../../contexts/themeContext";
import styles from "./FilterNote.module.sass";
import Dropdown from "../DropDown";

function FilterNote({ setSearch, selectedFilter, setSelectedFilter }) {
  const theme = useContext(ThemeContext);
  const [focus, setFocus] = useState(false);
  const classNames = 'input-'+theme; 
  return (
    <div className={styles.container}>
      <div className={`${styles.inputWrapper} ${focus ? styles.focused : ""}`}>
        <input
          type="text"
          placeholder="Search note..."
          className={classNames}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <Search className={styles.icon} />
      </div>
      <Dropdown selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <ThemeToggle />
    </div>
  );
}

export default FilterNote;
