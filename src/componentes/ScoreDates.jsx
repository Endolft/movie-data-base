import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faSmile,
  faSadTear,
  faClock,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

export const ScoreDates = ({ movie }) => {
  return (
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
          <FontAwesomeIcon icon={faClock} size="xl" /> Duration {movie.runtime}{" "}
          min
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
  );
};
