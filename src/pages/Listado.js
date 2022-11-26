import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../componentes/Header.js";
import { useFetch } from "../Hooks/useFetch.js";
import { genders } from "../componentes/data/genders";
import { Search } from "../componentes/Search";
import { Filters } from "../componentes/Filters";
import { MoviesList } from "../componentes/MoviesList";
import "../styles/styleListado.css";
import { useCounter } from "../Hooks/useCounter.js";

export const Listado = () => {
  let tokenAlmacenado = sessionStorage.getItem("token");
  const { counter, increment, decrement } = useCounter(1);
  const urlDefault = `https://api.themoviedb.org/3/discover/movie?api_key=03001bac9af23366932d6ea454838123&language=en-US&sort_by=popularity.desc&include_video=false&page=1`;
  const [url, seturl] = useState(urlDefault);
  const [filters, setfilters] = useState("");
  const [hide, sethide] = useState(true);
  const { data, isLoanding } = useFetch(url);

  const showfilter = (e) => {
    e.preventDefault();
    sethide(!hide);
    seturl(urlDefault);
  };
  useEffect(() => {
    if (filters === "") {
      seturl(`${urlDefault}&page=${counter}`);
    }
    seturl(`${urlDefault}&with_genres=${filters}&page=${counter}`);
  }, [counter]);

  const handlecheck = (e) => {
    e.preventDefault();

    let urlFilter = `${url}&with_genres=${e.target.value}`;

    setfilters(e.target.value);
    seturl(urlFilter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlsearch = `https://api.themoviedb.org/3/search/movie?api_key=03001bac9af23366932d6ea454838123&query=${e.target.search.value}`;
    e.target.search.value === "" ? seturl(urlDefault) : seturl(urlsearch);
  };

  return (
    <>
      <Header />
      {!tokenAlmacenado && <Navigate to="/" />}

      {isLoanding ? (
        <p>loanding...</p>
      ) : (
        <div className="content-dark">
          <div className="searching">
            <Search handleSubmit={handleSubmit} />
            <Filters
              handlecheck={handlecheck}
              showfilter={showfilter}
              hide={hide}
              genders={genders}
              filters={filters}
            />
          </div>
          <MoviesList movies={data} increment={increment} decrement={decrement} counter={counter}/>
          
        </div>
      )}
    </>
  );
};
