import React from "react";
import { useHistory } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import SignIn from "../SignIn/SignIn";
import "./Nav.scss";

export default function Nav({ setMovies }: any) {
  let history = useHistory();
  return (
    <nav className="Nav">
      <h2 onClick={() => history.replace("/Movie-Library/")}>My Movie Collection</h2>
      <SearchForm setMovies={setMovies}></SearchForm>
      <SignIn></SignIn>
    </nav>
  );
}
