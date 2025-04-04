import { useState } from "react";
import { Trash2, Pencil, Check } from "lucide-react";
import * as yup from "yup";
import AddTaskButton from "../AddTaskButton";
import detectiveImg from "./Detective.png";
import styles from "./NoteList.module.sass";

function NoteList({ search, selectedFilter }) {
  const [notes, setNotes] = useState([]);
  const [completed, setCompleted] = useState({});
  const [editNote, setEditNote] = useState(null);
  const [editText, setEditText] = useState("");

  const noteUpdateSchema = yup.object({
    note: yup
      .string()
      .required("Is required")
      .min(3, "Must be at least 3 characters long")
      .max(50, "Must be at most 50 characters long ")
      .trim(),
  });

  const handleAddNote = (note) => {
    if (note.trim() !== "" && !notes.includes(note)) {
      setNotes((prevNotes) => [...prevNotes, note]);
      setCompleted((prev) => ({ ...prev, [note]: false }));
    }
  };

  const handleCheckboxChange = (note) => {
    setCompleted((prev) => ({
      ...prev,
      [note]: !prev[note],
    }));
  };

  const handleDelNote = (noteToDelete) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note !== noteToDelete));
    setCompleted((prev) => {
      const updatedCompleted = { ...prev };
      delete updatedCompleted[noteToDelete];
      return updatedCompleted;
    });
  };

  const handleEditNote = (note) => {
    setEditNote(note);
    setEditText(note);
  };

  const handleSaveEdit = () => {
    noteUpdateSchema
      .validate({ note: editText })
      .then(() => {
        setNotes((prevNotes) =>
          prevNotes.map((note) => (note === editNote ? editText : note))
        );
        setCompleted((prev) => {
          const updatedCompleted = { ...prev };
          updatedCompleted[editText] = updatedCompleted[editNote];
          delete updatedCompleted[editNote];
          return updatedCompleted;
        });
        setEditNote(null);
      })
      .catch((e) => {
        setEditNote(null);
        console.log(e);
      });
  };

  const filteredNotes = notes
    .filter((note) => note.toLowerCase().includes(search.toLowerCase()))
    .filter((note) => {
      if (selectedFilter === "Complete") return completed[note];
      if (selectedFilter === "Incomplete") return !completed[note];
      return true;
    });

  return (
    <>
      {notes.length === 0 ? (
        <div>
          <img className={styles.img} src={detectiveImg} alt="Detective" />
          <h2 className={styles.title}>Empty...</h2>
          <AddTaskButton onAdd={handleAddNote} />
        </div>
      ) : (
        <>
          <AddTaskButton onAdd={handleAddNote} />
          <ul className={styles.noteList}>
            {filteredNotes.length > 0 ? (
              filteredNotes.map((note, index) => (
                <li className={styles.noteItem} key={index}>
                  <div className={styles.noteItemWrap}>
                    {editNote === note ? (
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className={styles.editInput}
                      />
                    ) : (
                      <div className={styles.noteItemText}>
                        <input
                          type="checkbox"
                          id={note}
                          name="todo"
                          value={note}
                          checked={completed[note] || false}
                          onChange={() => handleCheckboxChange(note)}
                        />
                        <label htmlFor={note}>
                          <span>{note}</span>
                        </label>
                      </div>
                    )}
                    <div className={styles.icons}>
                      {editNote === note ? (
                        <Check
                          className={styles.check}
                          onClick={handleSaveEdit}
                        />
                      ) : (
                        <Pencil
                          className={styles.pencil}
                          onClick={() => handleEditNote(note)}
                        />
                      )}
                      <Trash2
                        className={styles.trash}
                        onClick={() => handleDelNote(note)}
                      />
                    </div>
                  </div>
                  <hr />
                </li>
              ))
            ) : (
              <li className={styles.noResults}>No results</li>
            )}
          </ul>
        </>
      )}
    </>
  );
}

export default NoteList;
