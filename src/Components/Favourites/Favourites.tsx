import React from "react";
import { useHistory } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import Movie from "../../reducers";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "./Favourites.scss";
import placeholderimage from "../../media/placeholder.png";
import { getData, updateData } from "../firebase/firebasedatabase";

export default function Results() {
  const state = useAppSelector<RootState>((state) => state);
  const dispatch: AppDispatch = useAppDispatch();
  const setMovies = (mvs: Movie[]) => {
    dispatch({ type: "UPDATE_MOVIES", payload: mvs });
  };
  const history = useHistory();

  const addToFavourites = (e: React.MouseEvent, movie: Movie) => {
    e.stopPropagation();
    updateData(`user/${state.authUser.uid}/${movie.show?.name}`, movie);
  };

  const movies = state.authUser.uid
    ? getData(`user/${state.authUser.uid}/`)
    : [];
  console.log(movies);

  return (
    <section className="Favourites">
      <h1 className="Heading">Your Favourite Movies:</h1>
      {Object.values(movies).map((m: any) => {
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
            <div className="Overlay">
              <button onClick={(e) => addToFavourites(e, m)} type="button">
                <span>☆</span>
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
