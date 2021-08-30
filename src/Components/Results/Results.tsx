import React from "react";
import "./Results.scss";

export default function Results({ movies }: any) {
  return (
    <section className="Results">
      <p>Results:</p>
      {movies?.map((m: any) => {
        return <div key={m.show.id}>{m.show.name}</div>;
      })}
    </section>
  );
}
