import React from 'react'

export const Poster = ({movie}) => {
  return (
    <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="poster"
          alt="image"
        />
        <div className="genres-container">
          {movie.genres.map((gender) => {
            return (
              <button className="genres" key={gender.name}>
                {" "}
                {gender.name}{" "}
              </button>
            );
          })}
        </div>
      </div>
  )
}
