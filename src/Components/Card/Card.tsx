import React from "react";
import { useHistory } from "react-router";
import Movie from "../../reducers";
import placeholderimage from "../../media/placeholder.png";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { AppDispatch, RootState } from "../../store";
import { deleteData, updateData } from "../firebase/firebasedatabase";
import "./Card.scss";

export default function Card({ score, show }: Movie) {
  const state = useAppSelector<RootState>((state) => state);
  const history = useHistory();

  const addToFavourites = (e: React.MouseEvent, movie: Movie) => {
    e.stopPropagation();
    updateData(`user/${state.authUser.uid}/${movie.show?.name}`, movie);
  };

  const removeFromFavourites = (e: React.MouseEvent, movie: Movie) => {
    e.stopPropagation();
    deleteData(`user/${state.authUser.uid}/${movie.show?.name}`);
  };

  const dispatch: AppDispatch = useAppDispatch();
  const setMovies = (mvs: Movie[]) => {
    dispatch({ type: "UPDATE_MOVIES", payload: mvs });
  };

  return (
    <div
      onClick={() => {
        setMovies([{ score: score, show: show }]);
        history.replace(`/Movie-Library/MovieInfo/${show?.name}`);
      }}
      className="Card"
      key={show?.id}
    >
      <img
        alt={show?.name}
        src={show?.image?.original ? show?.image?.original : placeholderimage}
      ></img>
      <h3 className="Name">{show?.name}</h3>
      <p>
        Category: <span>{show?.type}</span>
      </p>
      <a
        className="Original"
        rel="noreferrer"
        target="_blank"
        href={show?.url}
        onClick={(e) => e.stopPropagation()}
      >
        Visit on TVMaze
      </a>
      <div className="Overlay">
        <button
          onClick={(e) => addToFavourites(e, { score: score, show: show })}
          type="button"
        >
          <span>☆</span>
        </button>
        <button
          onClick={(e) => removeFromFavourites(e, { score: score, show: show })}
          type="button"
        >
          <span>⊖</span>
        </button>
      </div>
    </div>
  );
}
