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
        return (
          <div className="Card" key={m.show.id}>
            <Link
              className="Link"
              onClick={() => setMovies([m])}
              to={`/movieinfo/${m.show.name}`}
            >
              <img
                alt={m.show.name}
                src={
                  m.show.image?.original
                    ? m.show.image?.original
                    : placeholderimage
                }
              ></img>
              <h3 className="Name">{m.show.name}</h3>
              <p>
                Category: <span>{m.show.type}</span>
              </p>
              <a
                className="Original"
                rel="noreferrer"
                target="_blank"
                href={m.show.url}
              >
                Visit on TVMaze
              </a>
            </Link>
          </div>
        );
      })}
    </section>
  );
}
