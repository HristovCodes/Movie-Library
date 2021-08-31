import React from "react";
import { RootState } from "../../store";
import "./Results.scss";

interface ResultsProps {
  movies: RootState;
}

export default function Results({ movies }: ResultsProps) {
  return (
    <section className="Results">
      <h1 className="Heading">Results:</h1>
      {movies.map((m: any) => {
        const customstyles: React.CSSProperties = {
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65) ), url(${m.show.image?.original})`,
        };
        return (
          <div style={customstyles} className="Card" key={m.show.id}>
            <h2>{m.show.name}</h2>
            <p>
              Category: <span>{m.show.type}</span>
            </p>
            <article
              dangerouslySetInnerHTML={{ __html: m.show.summary }}
            ></article>
            <p>
              <a rel="noreferrer" target="_blank" href={m.show.url}>
                {m.show.url}
              </a>
            </p>
          </div>
        );
      })}
    </section>
  );
}
