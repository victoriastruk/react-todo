import { useContext, useState } from "react";
import classNames from "classnames";
import { NOTE_VALIDATION_SCHEMA } from "../../utils/validate/validationSchemas";
import { ThemeContext } from "../../contexts/themeContext";
import styles from "./AddNewNoteModal.module.sass";
import CONSTANTS from "../../constansts";

function AddNewNoteModal({ onAdd, setIsModal }) {
  const { DARK } = CONSTANTS.THEME;
  const { theme } = useContext(ThemeContext);
  const [newNote, setNewNote] = useState("");
  const [error, setError] = useState("");

  const modalClassName = classNames(styles.modal, {
    [styles.modalDark]: theme === DARK,
  });
  const inputClassName = classNames(styles.input, {
    [styles.inputError]: error,
  });

  const addNewNote = (e) => {
    e.preventDefault();
    NOTE_VALIDATION_SCHEMA.validate({ note: newNote })
      .then(() => {
        onAdd(newNote);
        setNewNote("");
        setIsModal(false);
      })
      .catch((e) => setError(e.message));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNewNote(value);
    NOTE_VALIDATION_SCHEMA.validate({ note: value })
      .then(() => {
        setError("");
      })
      .catch((e) => setError(e.message));
  };

  const handleCancel = () => {
    setIsModal(false);
  };

  return (
    <>
      <form className={styles.modalOverlay} onSubmit={addNewNote}>
        <div className={modalClassName}>
          <label className={styles.title} htmlFor="note">
            New Note
          </label>
          <input
            type="text"
            placeholder="Input your note..."
            name="note"
            id="note"
            value={newNote}
            onChange={handleInputChange}
            className={inputClassName}
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
