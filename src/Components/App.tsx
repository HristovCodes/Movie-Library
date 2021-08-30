import React, { useState } from "react";
import "./App.scss";
import Hero from "./Hero/Hero";
import Nav from "./Nav/Nav";
import Results from "./Results/Results";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
