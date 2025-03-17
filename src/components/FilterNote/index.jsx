import ThemeNote from "../ThemeNote";

import styles from "./FilterNote.module.sass";

function FilterNote() {
  return (
    <div className={styles.filterContainer}>
      <input
        className={styles.input}
        type="search"
        placeholder="Search note..."
      />
      <select name="selectedFruit" defaultValue="ALL">
        <option value="ALL">All</option>
        <option value="Complete">Complete</option>
        <option value="Incomplete">Incomplete</option>
      </select>
      <ThemeNote/>
    </div>
  );
}

export default FilterNote;
