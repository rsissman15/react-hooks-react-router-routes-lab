import React from "react";
import { actors } from "../data";

function Actors() {

  const renderActors = () => {
    return actors.map(actor => {
      return (
        <div key={actor.name}>
          <h3>{actor.name}</h3>
          <ul>
            {actor.movies.map(movie => {
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
      <h1>Actors Page</h1>
      <br />
      {renderActors()}
    </>
  );
}

export default Actors;