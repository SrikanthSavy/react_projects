import React from "react";
import { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
//import Fire from "../../assets/images/fire.png";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ type, title, emoji }) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    sortBy: "default",
    sortOrder: "asc",
  });

  //useEffect(() => {}, []);   // Declaring an useEffect Hook
  /* useEffect(() => {
    fetch(apiUrl).then((res) => res.json().then((data) => console.log(data)));
    }, []);
    */
  const apiUrl = `https://api.themoviedb.org/3/movie/${type}?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }`;

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sort.sortBy !== "default") {
      const sortedMovies = _.orderBy(
        filterMovies,
        [sort.sortBy],
        [sort.sortOrder]
      );
      setFilterMovies(sortedMovies);
    }
  }, [sort]);

  const fetchMovies = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
    console.log(data);
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      console.log(`Rate : ${rate}`);
      setMinRating(rate);
      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  console.log("SORTed Field value:", sort);

  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {title}
          <img src={emoji} alt={`${emoji} icon`} className="navbar_emoji" />
        </h2>

        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratingList={[8, 7, 6, 5]}
          />
          <select
            name="sortBy"
            id=""
            onChange={handleSort}
            value={sort.sortBy}
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="sortOrder"
            id=""
            onChange={handleSort}
            value={sort.sortOrder}
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {/* <MovieCard /> */}
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
