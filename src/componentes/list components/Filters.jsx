import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../../styles/stylesFilters.css";

export const Filters = ({handleSelect,showfilter,hide,genres,filters,}) => {
  return (
    <>
      <div className="filter-show ">
        <h3 onClick={handleSelect} value={""}>
          Filters
        </h3>{" "}
        <FontAwesomeIcon
          icon={hide ? faCaretRight : faCaretDown}
          size="xl"
          onClick={showfilter}
        />
      </div>

      <div
        className={
          !hide
            ? "filters animate__animated animate__fadeInLeft animate__faster	"
            : " hide"
        }
      >
        <ul>
          {genres.map((genre, index) => {
            return (
              <div
                className={
                  genre.id !== filters
                    ? "genres-container"
                    : "genres-container-select"
                }
                key={index}
              >
                <li
                  className="genres-name"
                  onClick={handleSelect}
                  value={genre.id}
                >
                  {genre.name}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
