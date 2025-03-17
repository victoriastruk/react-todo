import { useState } from "react";
import styles from "./AddNewNoteModal.module.sass";

function AddNewNoteModal({ onAdd, setIsModal }) {
  const [newNote, setNewNote] = useState("");

  const addNewNote = (e) => {
    e.preventDefault();
    if (newNote.trim() !== "") onAdd(newNote);
    setNewNote("");
    setIsModal(false);
  };

  const handleCancel = () => {
    setIsModal(false);
  };

  return (
    <>
      <form className={styles.modalOverlay} onSubmit={addNewNote}>
        <div className={styles.modal}>
          <label className={styles.title} htmlFor="note">
            New Note
          </label>
          <input
            type="text"
            placeholder="Input your note..."
            name="note"
            id="note"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <div className={styles.modalButtons}>
            <button className={styles.btnCancel} onClick={handleCancel}>
              Cancel
            </button>
            <button className={styles.btnApply} type="submit">
              Apply
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddNewNoteModal;
