import { Link } from "react-router-dom";
import camera from "../componentes/imagenes/camera.png";
import "../styles/styleMovieList.css";

export const MoviesList = ({ movies }) => {
  return (
    <div className="page">
      <div className="movieList">
        {movies?.map((movie, index) => {
          return (
            <Link to={`/detalle/${movie.id}`} className="link" key={index}>
              <div className="card">
                <div className="overlay">
                  <img className="overlay-img" src={camera} alt='Camera image' />
                </div>

                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="img-card"
                  alt=""
                />

                <div className="text-container">
                  <h4 className="titulo-pelicula">{`${movie.title.substring(
                    0,
                    30
                  )}`}</h4>
                  <p>{`${movie.overview.substring(0, 140)}...`}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
