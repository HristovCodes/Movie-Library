import React from "react";
import Movie from "../../reducers";
import "./Results.scss";
import Card from "../Card/Card";

interface ResultsProps {
  movies: Movie[];
}

export default function Results({ movies }: ResultsProps) {
  return (
    <section className="Results">
      <h1 className="Heading">Results:</h1>
      {movies.map((m: any) => {
        return <Card key={m.show.id} score={m.score} show={m.show}></Card>;
      })}
    </section>
  );
}
