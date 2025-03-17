import { useState } from "react";
import BtnPlus from "../BtnPlus";
import detectiveImg from "./Detective.png";
import styles from "./NoteList.module.sass";

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const handleAddNote = (note) => {
    if (note.trim() !== "") setNotes((prevNotes) => [...prevNotes, note]);
    setIsEmpty(false);
  };

  return (
    <>
      {isEmpty ? (
        <div>
          <img className={styles.img} src={detectiveImg} alt="Detective" />
          <h2 className={styles.title}>Empty...</h2>
          <BtnPlus onAdd={handleAddNote} />
        </div>
      ) : (
        <>
          <BtnPlus onAdd={handleAddNote} />
          <ul className={styles.noteList}>
            {notes.map((note, index) => (
              <li className={styles.noteItem} key={index}>
                <div className={styles.noteItemText}>
                <input type="checkbox" id={note} name="todo" value={note} />
                <label htmlFor={note}><span>{note}</span></label>
                </div>
                <hr></hr>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default NoteList;
