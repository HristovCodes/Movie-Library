import React from "react";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import { useAppDispatch } from "../../hooks";
import "./Results.scss";
import placeholderimage from "../../media/placeholder.png";

interface ResultsProps {
  movies: RootState;
}

export default function Results({ movies }: ResultsProps) {
  const dispatch: AppDispatch = useAppDispatch();
  const setMovies = (mvs: RootState) => {
    dispatch({ type: "UPDATE_MOVIES", payload: mvs });
  };

  return (
    <section className="Results">
      <h1 className="Heading">Results:</h1>
      {movies.map((m: any) => {
        const full = m.show.summary ? m.show.summary : "";
        const summ =
          full.indexOf(".") <= 150
            ? full.substring(0, full.indexOf(".") + 1)
            : full.substr(0, 150) + "...";

        const customstyles: React.CSSProperties = {
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ), url(${
            m.show.image?.original ? m.show.image?.original : placeholderimage
          })`,
        };
        return (
          <div style={customstyles} className="Card" key={m.show.id}>
            <Link
              className="Name"
              onClick={() => setMovies([m])}
              to={`/movieinfo/${m.show.name}`}
            >
              {m.show.name}
            </Link>
            <p>
              Category: <span>{m.show.type}</span>
            </p>
            <article dangerouslySetInnerHTML={{ __html: summ }}></article>
            <a
              className="Original"
              rel="noreferrer"
              target="_blank"
              href={m.show.url}
            >
              Visit on TVMaze
            </a>
          </div>
        );
      })}
    </section>
  );
}
