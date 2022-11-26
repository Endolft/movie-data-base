import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useCounter } from '../Hooks/useCounter';

export const TrailersCarroussel = ({movieTrailer}) => {
  const { counter, decrement, increment } = useCounter(0);
  return (
    <div className="frame-contrainer">
    {movieTrailer ? (
      <>
        <div className={counter === 0 ? "hide" : "next"}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="faArrowRight"
            onClick={decrement}
          />
          <p>Previous</p>
        </div>
        <iframe
          src={`https://www.youtube.com/embed/${movieTrailer[counter]?.key}?&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div
          className={
            counter === movieTrailer.length - 1 ? "hide" : "next"
          }
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            className="faArrowRight"
            onClick={increment}
          />
          <p>Next</p>
        </div>
      </>
    ) : (
      <p></p>
    )}
  </div>
  )
}
