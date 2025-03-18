import {useState} from 'react';
import MainTitle from "../components/MainTitile";
import FilterNote from "../components/FilterNote";
import NoteList from "../components/NoteList";

function MainPage() {
  const [search, setSearch] = useState("");
  return (
    <>
      <MainTitle title="todo list" />
      <FilterNote setSearch={setSearch} />
      <NoteList search={search} />
    </>
  );
}

export default MainPage;
