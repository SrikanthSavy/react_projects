import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Fire from "./assets/images/fire.png";
import Star from "./assets/images/glowing-star.png";
import Partying from "./assets/images/partying-face.png";
import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/movielist/MovieList";
import SingleMovie from "./components/movielist/SingleMovie";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<MovieList type="popular" title="Popular" emoji={Fire} />}
          />
          <Route
            path="/top_rated"
            element={
              <MovieList type="top_rated" title="Top Rated" emoji={Star} />
            }
          />
          <Route
            path="/upcoming"
            element={
              <MovieList type="upcoming" title="Upcoming" emoji={Partying} />
            }
          />
          <Route path="/movie/:movieId" element={<SingleMovie />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
