import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faSmile,
  faSadTear,
  faClock,
  faLanguage,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/styleInfoMovie.css";

export const InfoMovie = ({ movie, videos, isloandingMovieList }) => {
  const [movieTrailer, setMovieTrailer] = useState([]);
  const [number, setnumber] = useState(0);

  const changeNext = () => {
    setnumber(number + 1);
  };

  const changePrevious = () => {
    setnumber(number - 1);
  };

  useEffect(() => {
    const filteredTrailers = videos.results.filter(
      (video) => video.type === "Trailer" || video.type === "Teaser"
    );

    setMovieTrailer((movieTrailer) => [...movieTrailer, ...filteredTrailers]);
  }, [videos]);

  return (
    <div className="info-movie">
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

      <div className="text-info">
        {!isloandingMovieList && (
          <div className="frame-contrainer">
            {movieTrailer ? (
              <>
                <div className={number === 0 ? "hide" : "next"}>
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="faArrowRight"
                    onClick={changePrevious}
                  />
                  <p>Previous</p>
                </div>
                <iframe
                  src={`https://www.youtube.com/embed/${movieTrailer[number]?.key}?&mute=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <div
                  className={
                    number === movieTrailer.length - 1 ? "hide" : "next"
                  }
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="faArrowRight"
                    onClick={changeNext}
                  />
                  <p>Next</p>
                </div>
              </>
            ) : (
              <p></p>
            )}
          </div>
        )}
        <div className="ul-container">
          <ul>
            <li>
              {" "}
              <FontAwesomeIcon icon={faLanguage} /> Original Lenguage{" "}
              {movie.spoken_languages[0].english_name}{" "}
            </li>
            <br />
            <li>
              <FontAwesomeIcon icon={faCalendarDays} size="xl" /> Release_date{" "}
              {movie.release_date}
            </li>
          </ul>
          <ul>
            <li>
              <FontAwesomeIcon icon={faClock} size="xl" /> Duration{" "}
              {movie.runtime} min
            </li>
            <br />
            <li>
              {" "}
              <FontAwesomeIcon
                icon={movie.vote_average < 6 ? faSadTear : faSmile}
                size="xl"
              />{" "}
              Score {movie.vote_average.toString().slice(0, 3)}/ 10{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
