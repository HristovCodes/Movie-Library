import React from "react";
import { RootState } from "../../store";
import "./Results.scss";

interface ResultsProps {
  movies: RootState;
}

export default function Results({ movies }: ResultsProps) {
  return (
    <section className="Results">
      <p>Results:</p>
      {movies.map((m: any) => {
        return <div key={m.show.id}>{m.show.name}</div>;
      })}
    </section>
  );
}
