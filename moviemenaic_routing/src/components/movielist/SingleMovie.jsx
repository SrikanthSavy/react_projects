import React from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const params = useParams();
  return <h2>SingleMovie- Id={params.movieId} </h2>;
};

export default SingleMovie;
