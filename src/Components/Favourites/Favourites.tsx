import React, { useEffect, useState } from "react";
import { RootState } from "../../store";
import Movie from "../../reducers";
import { useAppSelector } from "../../hooks";
import "./Favourites.scss";
import { database, getData } from "../firebase/firebasedatabase";
import Card from "../Card/Card";
import { onChildRemoved, query, ref } from "firebase/database";

export default function Results() {
  const state = useAppSelector<RootState>((state) => state);
  const [movies, setMovies] = useState<Movie[]>();
  onChildRemoved(
    query(ref(database, `user/${state.authUser.uid}/`)),
    (snapshop) => {
      if (snapshop.exists()) {
        const newMovies = movies?.filter(
          (mov) => mov.show?.id !== snapshop.val().show.id
        );
        if (newMovies !== movies) setMovies(newMovies);
      }
    }
  );

  useEffect(() => {
    if (!movies && state.authUser.uid)
      getData(`user/${state.authUser.uid}/`).then((v) => {
        setMovies(Object.values(v));
      });
  });

  return (
    <section className="Favourites">
      <h1 className="Heading">Your Favourite Movies:</h1>
      {movies?.map((m: any) => {
        return <Card key={m.show.id} score={m.score} show={m.show}></Card>;
      })}
    </section>
  );
}
