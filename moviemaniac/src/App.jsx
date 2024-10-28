import React from "react";

import "./App.css";
import Fire from "./assets/images/fire.png";
import Star from "./assets/images/glowing-star.png";
import Partying from "./assets/images/partying-face.png";

import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/movielist/MovieList";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <MovieList type="popular" title="Popular" emoji={Fire} />
        <MovieList type="top_rated" title="Top Rated" emoji={Star} />
        <MovieList type="upcoming" title="Upcoming" emoji={Partying} />
      </main>
    </div>
  );
};

export default App;
