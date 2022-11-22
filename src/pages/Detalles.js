import { React, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Header } from "../componentes/Header";
import "../styles/styleDetails.css";
import { useFetchDetails } from "../componentes/useFetchDetails.js";
import { Titles } from "../componentes/Titles";
import { InfoMovie } from "../componentes/InfoMovie";
import { MoreInfo } from "../componentes/MoreInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const Detalles = () => {
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
  let tokenAlmacenado = sessionStorage.getItem("token");

 
  return (
    <>
      {!tokenAlmacenado && <Navigate to="/" />}

      {!isLoadingMovie && (
        <div className="container-details">
          {close ? (
            <div className="overlade-trailer">
              <div className="close-container">
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={handleclose}
                  className="close"
                />
              </div>
              <div className="trailer-ovarlade-container">
                 {trailer?.items?
                <iframe
                  src={`https://www.youtube.com/embed/${trailer.items[0].id.videoId}?autoplay=1&loop=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="trailer-ovarlade"
                ></iframe> :""} 
              </div>
            </div>
          ) : (
            <>
              <Header />
              <div className="card-movie">
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
