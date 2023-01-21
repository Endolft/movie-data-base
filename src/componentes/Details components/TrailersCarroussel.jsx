import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useCounter } from "../../Hooks/useCounter";

export const TrailersCarroussel = ({ movieTrailer }) => {
  const { counter, decrement, increment } = useCounter(0);
  console.log(counter);

  return (
    <div className="frame-contrainer">
      {movieTrailer ? (
        <>
          {(counter > 0 && (
            <div className={"next"} onClick={decrement}>
              <FontAwesomeIcon icon={faAngleLeft} className="faArrowRight" />
              <p>Previous</p>
            </div>
          )) ||
            (counter === 0 && (
              <div className={"next-disable"}>
                <FontAwesomeIcon icon={faAngleLeft} className="faArrowRight" />
                <p>Previous</p>
              </div>
            ))}
          <iframe
            src={`https://www.youtube.com/embed/${movieTrailer[counter]?.key}?&mute=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          {(counter < movieTrailer.length && (
            <div className={"next"} onClick={increment}>
              <p>Next</p>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="faArrowRight"
              />{" "}
            </div>
          )) ||
            (counter === movieTrailer.length && (
              <div className={"next-disable"}>
                <p>Next</p>
                <FontAwesomeIcon icon={faAngleRight} className="faArrowRight" />
              </div>
            ))}
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};
