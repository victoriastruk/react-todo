import React from "react";
import MainTitle from "../components/MainTitile";
import FilterNote from "../components/FilterNote";
import NoteList from "../components/NoteList";
import BtnPlus from "../components/BtnPlus";

function MainPage() {
  return (
    <>
      <MainTitle title="todo list" />
      <FilterNote />
      <NoteList />
    </>
  );
}

export default MainPage;
