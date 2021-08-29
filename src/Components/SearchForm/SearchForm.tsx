import React, { FormEventHandler, useState } from "react";
import "./SearchForm.scss";

export default function SearchForm({ setMovies }: any) {
  const [search, setSearch] = useState("");

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${search}`
    );

    setMovies(await response.json());
  };

  return (
    <form aria-label="form" onSubmit={handleSubmit}>
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
