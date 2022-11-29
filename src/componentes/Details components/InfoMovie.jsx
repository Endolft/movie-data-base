import { useState, useEffect } from "react";
import { TrailersCarroussel } from "./TrailersCarroussel";
import { ScoreDates } from "./ScoreDates";
import { Poster } from "./Poster";
import "../../styles/styleInfoMovie.css";

export const InfoMovie = ({ movie, videos, isloandingMovieList }) => {
  const [movieTrailer, setMovieTrailer] = useState([]);

  useEffect(() => {
    const filteredTrailers = videos.results.filter(
      (video) => video.type === "Trailer" || video.type === "Teaser"
    );
    setMovieTrailer((movieTrailer) => [...movieTrailer, ...filteredTrailers]);
  }, [videos]);

  return (
    <div className="info-movie">
      <Poster movie={movie} />
      <div className="text-info">
        {!isloandingMovieList && (
          <TrailersCarroussel movieTrailer={movieTrailer} />
        )}
        <ScoreDates movie={movie} />
      </div>
    </div>
  );
};
