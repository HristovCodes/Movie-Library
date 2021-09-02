import React, { useEffect, useState } from "react";
import "./MovieInfo.scss";
import { useAppSelector } from "../../hooks";
import Movie from "../../reducers";
import { getData, updateData } from "../firebase/firebasedatabase";
import { RootState } from "../../store";

export default function MovieInfo() {
  const state = useAppSelector<RootState>((state) => state);
  const [stars, setStars] = useState<string>("");
  const [review, setReview] = useState<string>("");
  const movies = useAppSelector<Movie[]>((state) => state.movies);

  const updateStars = () => {
    if (state.authUser.uid && movies[0]) {
      updateData(
        `notes/${state.authUser.uid}/${movies[0].show?.name}/rating/`,
        {
          stars: stars,
        }
      );
    }
  };

  const updateReview = () => {
    if (state.authUser.uid && movies[0]) {
      updateData(
        `notes/${state.authUser.uid}/${movies[0].show?.name}/rating/`,
        {
          review: review,
        }
      );
    }
  };

  useEffect(() => {
    if (stars === "" && movies[0] && state.authUser.uid) {
      getData(
        `notes/${state.authUser.uid}/${movies[0].show?.name}/rating/`
      ).then((r) => {
        setStars(r.stars);
        setReview(r.review);
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
        <div className="Review">
          <div className={`StarRatings ${stars}`}>
            <span
              onClick={() => updateStars()}
              onMouseOver={() => setStars("one")}
            >
              ★
            </span>
            <span
              onClick={() => updateStars()}
              onMouseOver={() => setStars("two")}
            >
              ★
            </span>
            <span
              onClick={() => updateStars()}
              onMouseOver={() => setStars("three")}
            >
              ★
            </span>
            <span
              onClick={() => updateStars()}
              onMouseOver={() => setStars("four")}
            >
              ★
            </span>
            <span
              onClick={() => updateStars()}
              onMouseOver={() => setStars("five")}
            >
              ★
            </span>
          </div>
          <textarea
            placeholder={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          <button
            value={review}
            onClick={() => {
              updateStars();
              updateReview();
            }}
            type="button"
          >
            Save note
          </button>
        </div>
      </article>
    </div>
  ) : (
    <div></div>
  );
}
