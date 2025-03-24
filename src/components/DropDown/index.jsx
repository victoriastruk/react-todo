import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./DropDown.module.sass";

export default function Dropdown({ selectedFilter, setSelectedFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["All", "Complete", "Incomplete"];

  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
          {selectedFilter} {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
        {isOpen && (
          <ul className={styles.menu}>
            {options.map((option) => (
              <li
                key={option}
                className={styles.option}
                onClick={() => {
                  setSelectedFilter(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
