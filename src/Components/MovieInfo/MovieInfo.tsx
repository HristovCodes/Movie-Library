import React from "react";
import "./MovieInfo.scss";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";

export default function MovieInfo() {
  const movies = useAppSelector<RootState>((state) => state);

  return movies.length ? (
    <article className="MovieInfo">
      <img
        alt={movies[0].show?.name}
        src={movies[0].show?.image?.original}
      ></img>
      <h1 className="Heading">{movies[0].show?.name}</h1>
      <p className="Genres">
        Category: <span>{movies[0].show?.type}</span>
      </p>
      <article
        dangerouslySetInnerHTML={{
          __html: `${movies[0].show?.summary ? movies[0].show?.summary : ""}`,
        }}
      ></article>
      <a rel="noreferrer" target="_blank" href={movies[0].show?.url}>
        Visit on TVMaze
      </a>
    </article>
  ) : (
    <div></div>
  );
}
