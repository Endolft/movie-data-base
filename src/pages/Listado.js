import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../componentes/Header.js";
import "../styles/styleListado.css";
import { useFetch } from "../componentes/useFetch";
import { genders } from "../componentes/data/genders";
import { Search } from "../componentes/Search";
import { Filters } from "../componentes/Filters";
import { MoviesList } from "../componentes/MoviesList";
export const Listado = () => {
  let tokenAlmacenado = sessionStorage.getItem("token");

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=03001bac9af23366932d6ea454838123&language=en-US&sort_by=popularity.desc&include_video=false&page={param}`;
  const [movies, setmovies] = useState([]);

  const [filters, setfilters] = useState("");

  const [hide, sethide] = useState(true);

  const { movieList } = useFetch({ url });

  useEffect(() => {
    const getResource = async (url) => {
      const resp = await fetch(url);
      const jsonResponse = resp.json();
      setmovies(jsonResponse.results);
    };
    getResource(url);
  }, [url]);

  const showfilter = (e) => {
    e.preventDefault();
    sethide(!hide);
  };

  const handlecheck = (e) => {
    e.preventDefault();

    let urlFilter = `${url}&with_genres=${e.target.value}`;

    console.log(urlFilter);

    console.log(urlFilter);
    setfilters(e.target.value);

    const getResource = async (urlFilter) => {
      const resp = await fetch(urlFilter);
      const jsonResponse = await resp.json();
      setmovies(jsonResponse.results);
    };

    e.target.value ? getResource(urlFilter) : getResource(url);
  };

  useEffect(() => {
    setmovies(movieList);
  }, [movieList]);

  const handlesubmit = (e) => {
    e.preventDefault();
    const urlsearch = `https://api.themoviedb.org/3/search/movie?api_key=03001bac9af23366932d6ea454838123&query=${e.target.search.value}`;
    const getResource = async (url) => {
      const resp = await fetch(url);
      const jsonResponse = await resp.json();
      setmovies(jsonResponse.results);
    };
    e.target.search.value ? getResource(urlsearch) : getResource(url);
  };

  return (
    <>
      <Header />
      {!tokenAlmacenado && <Navigate to="/" />}

      {!movies ? (
        <p>loanding...</p>
      ) : (
        <div className="content-dark">
          <div className="searching">
            <Search handlesubmit={handlesubmit} />
            <Filters
              handlecheck={handlecheck}
              showfilter={showfilter}
              hide={hide}
              genders={genders}
              filters={filters}
            />
          </div>
          <MoviesList movies={movies} />
        </div>
      )}
    </>
  );
};
