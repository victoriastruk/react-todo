import { useState } from "react";
import styles from "./AddNewNoteModal.module.sass";
import * as yup from "yup";
function AddNewNoteModal({ onAdd, setIsModal }) {
  const [newNote, setNewNote] = useState("");

  const noteSchema = yup.object({
    note: yup
      .string()
      .required("Is required")
      .min(3, "Must be at least 3 characters long")
      .max(50, "Must be at most 50 characters long ")
      .trim(),
  });

  const addNewNote = (e) => {
    e.preventDefault();
    noteSchema
      .validate({ note: newNote })
      .then(() => {
        onAdd(newNote);
        setNewNote("");
        setIsModal(false);
      })
      .catch((e) => console.log(e));
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
