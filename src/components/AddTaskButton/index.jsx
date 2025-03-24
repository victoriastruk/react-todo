import { useState } from "react";
import AddNewNoteModal from "../AddNewNoteModal";
import styles from "./AddTaskButton.module.sass";

function AddTaskButton({ onAdd }) {
  const [isModal, setIsModal] = useState(false);

  const handleAddNote = () => {
    setIsModal(true);
  };
  return (
    <>
      {isModal ? (
        <AddNewNoteModal setIsModal={setIsModal} onAdd={onAdd} />
      ) : (
        <button className={styles.btnPlus} onClick={handleAddNote}>
          +
        </button>
      )}
    </>
  );
}

export default AddTaskButton;
