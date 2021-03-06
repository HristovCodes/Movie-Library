import React from "react";
import "./App.scss";
import Hero from "./Hero/Hero";
import Nav from "./Nav/Nav";
import Results from "./Results/Results";
import MovieInfo from "./MovieInfo/MovieInfo";
import Favourites from "./Favourites/Favourites";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { AppDispatch, RootState } from "../store";
import Movie from "../reducers";

function App() {
  const state = useAppSelector<RootState>((state) => state);
  const dispatch: AppDispatch = useAppDispatch();

  const setMovies = (mvs: Movie[]) => {
    dispatch({ type: "UPDATE_MOVIES", payload: mvs });
  };

  return (
    <Router>
      <Nav setMovies={setMovies}></Nav>
      <div className="App">
        <Switch>
          <Route exact path="/Movie-Library/">
            <Hero></Hero>
            <Favourites></Favourites>
          </Route>
          <Route path="/Movie-Library/Search/">
            <Results movies={state.movies}></Results>
          </Route>
          <Route path="/Movie-Library/MovieInfo/">
            <MovieInfo></MovieInfo>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
