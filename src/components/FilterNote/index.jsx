import { useState, useContext } from "react";
import { Search } from "lucide-react";
import classNames from "classnames";
import CONSTANTS from "../../constansts";
import ThemeToggle from "../ThemeToggleBtn";
import { ThemeContext } from "../../contexts/themeContext";
import Dropdown from "../DropDown";

import styles from "./FilterNote.module.sass";

function FilterNote({ setSearch, selectedFilter, setSelectedFilter }) {
  const { DARK } = CONSTANTS.THEME;
  const { theme } = useContext(ThemeContext);
  const [focus, setFocus] = useState(false);

  const inputWrapperClassName = classNames(
    styles.inputWrapper,
    { [styles.inputWrapperDark]: theme === DARK },
    { [styles.focused]: focus }
  );
  const inputClassName = classNames(styles.input, {
    [styles.inputDark]: theme === DARK,
  });
  const searchClassName = classNames(styles.icon, {
    [styles.iconDark]: theme === DARK,
  });
  return (
    <div className={styles.container}>
      <div className={inputWrapperClassName}>
        <input
          type="text"
          placeholder="Search note..."
          className={inputClassName}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <Search className={searchClassName} />
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
