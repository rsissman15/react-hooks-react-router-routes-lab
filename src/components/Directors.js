import React from "react";
import { directors } from "../data";

function Directors() {

  const renderDirectors = () => {
    return directors.map(director => {
      return (
        <div key={director.name}>
          <h3>{director.name}</h3>
          <ul>
            {director.movies.map(movie => {
              return (
                <li key={movie}>{movie}</li>
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
      <h1>Directors Page</h1>
      <br />
      {renderDirectors()}
    </>
  );
}

export default Directors;