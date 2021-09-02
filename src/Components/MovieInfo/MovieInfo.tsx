import React, { useEffect, useState } from "react";
import "./MovieInfo.scss";
import { useAppSelector } from "../../hooks";
import Movie from "../../reducers";
import { getData, updateData } from "../firebase/firebasedatabase";
import { RootState } from "../../store";

export default function MovieInfo() {
  const state = useAppSelector<RootState>((state) => state);
  const [stars, setStars] = useState<string>("");
  const movies = useAppSelector<Movie[]>((state) => state.movies);

  const handleClick = () => {
    if (state.authUser.uid) {
      updateData(`notes/${state.authUser.uid}/${movies[0].show?.name}/stars/`, {
        rating: stars,
      });
    }
  };

  useEffect(() => {
    if (stars === "") {
      getData(
        `notes/${state.authUser.uid}/${movies[0].show?.name}/stars/rating`
      ).then((r) => {
        setStars(r);
      });
    }
  });

  return movies.length ? (
    <div className="MovieInfo">
      <article className="Grid">
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
            __html: `${
              movies[0].show?.summary
                ? movies[0].show?.summary
                : "<p>No description avaliable.</p>"
            }`,
          }}
        ></article>
        <a rel="noreferrer" target="_blank" href={movies[0].show?.url}>
          Visit on TVMaze
        </a>
      </article>
      <div className={`StarRatings ${stars}`}>
        <span onClick={() => handleClick()} onMouseOver={() => setStars("one")}>
          ★
        </span>
        <span onClick={() => handleClick()} onMouseOver={() => setStars("two")}>
          ★
        </span>
        <span
          onClick={() => handleClick()}
          onMouseOver={() => setStars("three")}
        >
          ★
        </span>
        <span
          onClick={() => handleClick()}
          onMouseOver={() => setStars("four")}
        >
          ★
        </span>
        <span
          onClick={() => handleClick()}
          onMouseOver={() => setStars("five")}
        >
          ★
        </span>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
