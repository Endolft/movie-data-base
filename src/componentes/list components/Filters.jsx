import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../../styles/stylesFilters.css";

export const Filters = ({
  handleSelectGenre,
  showfilter,
  show,
  genres,
  filters,
}) => {
  console.log(show);
  return (
    <>
      <div className="filter-show " onClick={showfilter}>
        <h3 onClick={handleSelectGenre} value={""}>
          Filters
        </h3>{" "}
        <FontAwesomeIcon icon={show ? faCaretRight : faCaretDown} size="xl" />
      </div>

      {show && (
        <div className="filters animate__animated animate__fadeInLeft animate__faster" id="list-genre">
          <ul className="list-group">
            {genres.map((genre, index) => {
              return (
                <div
                  className={
                    genre.id !== filters
                      ? "genres-container-filter"
                      : "genres-container-select"
                  }
                  key={index}
                >
                  <li
                    className="genres-names"
                    onClick={handleSelectGenre}
                    value={genre.id}
                  >
                    {genre.name}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
