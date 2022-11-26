import { React, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Header } from "../componentes/Header";
import "../styles/styleDetails.css";
import { useFetchDetails } from "../Hooks/useFetchDetails.js";
import { Titles } from "../componentes/Titles";
import { InfoMovie } from "../componentes/InfoMovie";
import { MoreInfo } from "../componentes/MoreInfo";
import { FullScreenTrailer } from "../componentes/FullScreenTrailer";

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
            <FullScreenTrailer handleclose={handleclose} trailer={trailer} />
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
