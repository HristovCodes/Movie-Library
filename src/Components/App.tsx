import React from "react";
import "./App.scss";
import Hero from "./Hero/Hero";
import Nav from "./Nav/Nav";
import Results from "./Results/Results";
import MovieInfo from "./MovieInfo/MovieInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { AppDispatch, RootState } from "../store";

function App() {
  const movies = useAppSelector<RootState>((state) => state);
  const dispatch: AppDispatch = useAppDispatch();

  const setMovies = (mvs: RootState) => {
    dispatch({ type: "UPDATE_MOVIES", payload: mvs });
  };

  return (
    <Router>
      <Nav setMovies={setMovies}></Nav>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Hero></Hero>
          </Route>
          <Route path="/Search/">
            <Results movies={movies}></Results>
          </Route>
          <Route path="/MovieInfo/">
            <MovieInfo></MovieInfo>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
