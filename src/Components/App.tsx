import React, { useState } from "react";
import "./App.scss";
import Hero from "./Hero/Hero";
import Nav from "./Nav/Nav";

function App() {
  const [movies, setMovies] = useState([]);

  return movies ? (
    <div className="App">
      <Nav setMovies={setMovies}></Nav>
      <Hero></Hero>
      {movies.map((m: any) => {
        return <div key={m.show.id}>{m.show.name}</div>;
      })}
    </div>
  ) : (
    <div className="App">
      <Nav setMovies={setMovies}></Nav>
      <Hero></Hero>
    </div>
  );
}

export default App;
