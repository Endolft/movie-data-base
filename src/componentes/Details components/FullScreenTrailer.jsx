import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const FullScreenTrailer = ({ handleclose, trailer }) => {
  return (
    <div className="overlade-trailer">
      <div className="close-container">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={handleclose}
          className="close"
        />
      </div>

      <div className="trailer-ovarlade-container">
        {trailer?.items ? (
          <iframe
            src={`https://www.youtube.com/embed/${trailer.items[0].id.videoId}?autoplay=1&loop=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="trailer-ovarlade"
          ></iframe>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
