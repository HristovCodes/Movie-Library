import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchForm.scss";

export default function SearchForm({ setMovies }: any) {
  const [search, setSearch] = useState("");
  let history = useHistory();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${search}`
    );

    setMovies(await response.json());
    history.replace(`/search/${search}`);
  };
  return (
    <form className="SearchForm" aria-label="form" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="search"
        placeholder="Search by movie title..."
        type="search"
      ></input>
      <button className="btnsubmit" type="submit">
        Search
      </button>
    </form>
  );
}
