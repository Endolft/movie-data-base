import { useEffect, useState } from "react";
import { Header } from "../componentes/Header.jsx";
import { useFetch } from "../Hooks/useFetch.js";
import { genres } from "../componentes/data/genres";
import { Search } from "../componentes/list components/Search";
import { Filters } from "../componentes/list components/Filters";
import { MoviesList } from "../componentes/list components/MoviesList";
import { useCounter } from "../Hooks/useCounter.js";
import "../styles/styleListado.css";

const urlDefault = `https://api.themoviedb.org/3/discover/movie?api_key=03001bac9af23366932d6ea454838123&language=en-US&sort_by=popularity.desc&include_video=false&page=1`;

export const List = () => {
  const [url, seturl] = useState(urlDefault);
  const [filters, setfilters] = useState("");
  const [hide, setHide] = useState(true);
  const [search, setSearch] = useState("");

  const { counter, increment, decrement, setCounter } = useCounter(1);
  const { data, isLoanding, pages } = useFetch(url);

  const showfilter = (e) => {
    e.preventDefault();
    setHide(!hide);

    if (filters !== "") {
      setfilters("");
      setCounter(1);
      seturl(urlDefault);
    }
    if (search !== "") {
      setSearch("");
      setCounter(1);
      seturl(urlDefault);
    }
  };

  useEffect(() => {
    if (counter) {
      if (filters === "" && search === "") {
        seturl(`${urlDefault}&page=${counter}`);
        return;
      }
      if (filters !== "") {
        seturl(`${urlDefault}&with_genres=${filters}&page=${counter}`);
        return;
      }
      seturl(
        `https://api.themoviedb.org/3/search/movie?api_key=03001bac9af23366932d6ea454838123&query=${search}&page=${counter}`
      );
    }
  }, [counter]);

  const handleSelect = (e) => {
    e.preventDefault();
    setfilters("");
    setCounter(1);
    let urlFilter = `${url}&with_genres=${e.target.value}&page=1`;
    setfilters(e.target.value);
    seturl(urlFilter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHide(true);
    setfilters("");
    setCounter(1);
    setSearch(e.target.search.value);
    const urlsearch = `https://api.themoviedb.org/3/search/movie?api_key=03001bac9af23366932d6ea454838123&query=${e.target.search.value}`;
    e.target.search.value === "" ? seturl(urlDefault) : seturl(urlsearch);
  };

  return (
    <>
      <Header />

      {isLoanding ? (
        <div className="loanding"></div>
      ) : (
        <div className="content-dark   animate__animated animate__fadeIn animate__bounce  animate__slow">
          <div className="searching">
            <Search handleSubmit={handleSubmit} />
            <Filters
              handleSelect={handleSelect}
              showfilter={showfilter}
              hide={hide}
              genres={genres}
              filters={filters}
            />
          </div>
          <MoviesList
            movies={data}
            increment={increment}
            decrement={decrement}
            counter={counter}
            pages={pages}
            setcounter={setCounter}
            search={search}
            filters={filters}
            hide={hide}
          />
        </div>
      )}
    </>
  );
};
