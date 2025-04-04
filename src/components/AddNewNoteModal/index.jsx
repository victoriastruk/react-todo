import { useContext, useState } from "react";
import styles from "./AddNewNoteModal.module.sass";
import * as yup from "yup";
import { ThemeContext } from "../../contexts/themeContext";

function AddNewNoteModal({ onAdd, setIsModal }) {
  const { theme } = useContext(ThemeContext);
  const [newNote, setNewNote] = useState("");
  const [error, setError] = useState("");

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
      .catch((e) => setError(e.message));
  };

  const handleCancel = () => {
    setIsModal(false);
  };

  return (
    <>
      <form className={styles.modalOverlay} onSubmit={addNewNote}>
        <div className={theme === "light" ? styles.modal : styles.modalDark}>
          <label className={styles.title} htmlFor="note">
            New Note
          </label>
          <input
            type="text"
            placeholder="Input your note..."
            name="note"
            id="note"
            value={newNote}
            onChange={(e) => {
              const value = e.target.value;
              setNewNote(value);
              noteSchema
                .validate({ note: value })
                .then(() => {
                  setError("");
                })
                .catch((e) => setError(e.message));
            }}
            className={error ? styles.inputError : ""}
          />
          {error && <p className="error">{error}</p>}
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
