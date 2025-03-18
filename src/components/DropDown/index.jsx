import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./DropDown.module.sass";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("ALL");
 
  const options = ["All", "Complete", "Incomplete"];

  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
          {selected} {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
        {isOpen && (
          <ul className={styles.menu}>
            {options.map((option) => (
              <li
                key={option}
                className={styles.option}
                onClick={() => {
                  setSelected(option);
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
