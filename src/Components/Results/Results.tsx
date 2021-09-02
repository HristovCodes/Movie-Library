import React from "react";
import { useHistory } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import Movie from "../../reducers";
import { useAppDispatch } from "../../hooks";
import "./Results.scss";
import placeholderimage from "../../media/placeholder.png";

interface ResultsProps {
  movies: Movie[];
}

export default function Results({ movies }: ResultsProps) {
  const dispatch: AppDispatch = useAppDispatch();
  const setMovies = (mvs: Movie[]) => {
    dispatch({ type: "UPDATE_MOVIES", payload: mvs });
  };
  const history = useHistory();

  return (
    <section className="Results">
      <h1 className="Heading">Results:</h1>
      {movies.map((m: any) => {
        return (
          <div
            onClick={() => {
              setMovies([m]);
              history.replace(`/movieinfo/${m.show.name}`);
            }}
            className="Card"
            key={m.show.id}
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
              onClick={(e) => e.stopPropagation()}
            >
              Visit on TVMaze
            </a>
          </div>
        );
      })}
    </section>
  );
}
