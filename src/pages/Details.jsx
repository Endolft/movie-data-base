import { React, useState } from "react";
import {  useParams } from "react-router-dom";
import { useFetchDetails } from "../Hooks/useFetchDetails.js";
import { Titles } from "../componentes/Details components/Titles";
import { InfoMovie } from "../componentes/Details components/InfoMovie";
import { MoreInfo } from "../componentes/Details components/MoreInfo";
import { FullScreenTrailer } from "../componentes/Details components/FullScreenTrailer";
import "../styles/styleDetails.css";

export const Details = () => {
  let { id } = useParams();
  const [close, setclose] = useState(true);

  const { response: videos, isLoading: isloandingMovieList } = useFetchDetails({
    url: `https://api.themoviedb.org/3/movie/{param}/videos?api_key=03001bac9af23366932d6ea454838123&language=en-US`,
    params: id,
  });

  const { response: movie, isLoading: isLoadingMovie } = useFetchDetails({
    url: "https://api.themoviedb.org/3/movie/{param}?api_key=03001bac9af23366932d6ea454838123",
    params: id,
  });

  const { response: trailer } = useFetchDetails({
    url: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBmKB96BGyYC-TjQiOzad5fzTn63XGk894&type=video&snippet&maxResults=1&q=trailer%20{param}",
    params: movie,
    key: "title",
  });

  const handleclose = (e) => {
    setclose(false);
    console.log(e);
  };

  return (
    <>
      {!isLoadingMovie && (
        <div className="container-details animate__animated animate__fadeIn " >
          {close ? (
            <FullScreenTrailer handleclose={handleclose} trailer={trailer} />
          ) : (
            <>
              
              <div className="card-movie animate__animated animate__fadeIn animate__bounce  animate__slow" id="container-movie">
                <Titles movie={movie} />
                <InfoMovie
                  movie={movie}
                  trailer={trailer}
                  videos={videos}
                  close={close}
                  isloandingMovieList={isloandingMovieList}
                />
                <MoreInfo movie={movie} />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
