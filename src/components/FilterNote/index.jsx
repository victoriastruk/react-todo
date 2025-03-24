import ThemeToggle from "../ThemeToggle";
import { useState } from "react";
import { Search } from "lucide-react";
import styles from "./FilterNote.module.sass";
import Dropdown from "../DropDown";

function FilterNote({ setSearch, selectedFilter, setSelectedFilter }) {
  const [focus, setFocus] = useState(false);

  return (
    <div className={styles.container}>
      <div className={`${styles.inputWrapper} ${focus ? styles.focused : ""}`}>
        <input
          type="text"
          placeholder="Search note..."
          className={styles.input}
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
