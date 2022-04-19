import React from "react";
import { movies } from "../data";

function Movies() {

  const renderMovies = () => {
    return movies.map(movie => {
      return (
        <div key={movie.title}>
          <h3>
            {movie.title}
            <br />
            <span><small><small>Run time: {movie.time} min</small></small></span>
          </h3>
          <ul>
            {movie.genres.map(genre => {
              return (
                <li key={genre}>{genre}</li>
              )
            })}
          </ul>
          <hr />
        </div>
      )
    })
  }

  return (
    <>
      <h1>Movies Page</h1>
      <br />
      {renderMovies()}
    </>
  );
}

export default Movies;