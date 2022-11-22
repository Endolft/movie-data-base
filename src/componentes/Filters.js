import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/stylesFilters.css";

export const Filters = ({
  handlecheck,
  showfilter,
  hide,
  genders,
  filters,
}) => {
  return (
    <>
      <div className="filter-show">
        <h3 onClick={handlecheck} value={""}>
          Filters
        </h3>{" "}
        <FontAwesomeIcon
          icon={hide ? faCaretRight : faCaretDown}
          size="xl"
          onClick={showfilter}
        />
      </div>

      <div className={!hide ? "filters" : "hide"}>
        <ul>
          {genders.map((gender, index) => {
            return (
              <div
                className={
                  gender.id !== filters
                    ? "gender-container"
                    : "gender-container-select"
                }
                key={index}
              >
                <li
                  className="gender-name"
                  onClick={handlecheck}
                  value={gender.id}
                >
                  {gender.name}{" "}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
