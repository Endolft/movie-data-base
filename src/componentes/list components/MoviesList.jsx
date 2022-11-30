import { Link } from "react-router-dom";
import camera from "../../componentes/images/camera.png";
import { Pagination } from "./Pagination";
import "../../styles/styleMovieList.css";

export const MoviesList = ({movies,increment,decrement,counter,pages,setcounter,search,filters,hide,
}) => {
  return (
    <div className="page  ">
      <div className="movieList">
        {movies?.map((movie, index) => {
          return (
            <Link to={`/detalle/${movie.id}`} className="link" key={index}>
              <div className="card">
                <div className="overlay">
                  <img className="overlay-img" src={camera} alt="Camera " />
                </div>

                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="img-card"
                  alt=""
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src =
                      "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg";
                  }}
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
      <Pagination
        pages={pages}
        increment={increment}
        decrement={decrement}
        counter={counter}
        setcounter={setcounter}
        search={search}
        filters={filters}
        hide={hide}
      />
    </div>
  );
};
