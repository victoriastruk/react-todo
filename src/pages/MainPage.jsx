// import { ThemeProvider } from "../components/contexts/themeContext";
import {useState} from 'react';
import {ThemeContext} from '../contexts/themeContext'
import MainTitle from "../components/MainTitile";
import FilterNote from "../components/FilterNote";
import NoteList from "../components/NoteList";

function MainPage() {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  return (
    <ThemeContext.Provider value='dark'>
      <MainTitle title="todo list" />
      <FilterNote setSearch={setSearch} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <NoteList search={search} selectedFilter={selectedFilter} />
    </ThemeContext.Provider>
  );
}

export default MainPage;
