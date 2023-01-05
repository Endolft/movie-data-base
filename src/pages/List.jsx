import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useFetch } from "../Hooks/useFetch.js";
import { genresList } from "../componentes/data/genres";
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
  const [token, settoken] = useState("");
  const [genres, setgenres] = useState("");

  const { counter, increment, decrement, setCounter } = useCounter(1);
  const { data, isLoanding, pages } = useFetch(url);

  const navigate = useNavigate();
  const location = useLocation();
  const [params, setParams] = useSearchParams();

  const query = params.get("query");
  const genre = params.get("genre");
  console.log({ genre });

  useEffect(() => {
    if (!Boolean(genre)) {
     seturl(urlDefault) 
     setfilters(null)
     return
    }
    seturl(`${urlDefault}&with_genres=${genre}`);
    setfilters(parseInt(genre))
  }, [genre]);
  useEffect(() => {
    if(!Boolean(query)){
      return
    }
    seturl(`https://api.themoviedb.org/3/search/movie?api_key=03001bac9af23366932d6ea454838123&query=${query}`)
    setSearch(query)

  }, [query])
  

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
    settoken(sessionStorage.getItem("token"));
  }, []);

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

    navigate(`/listado?genre=${e.target.value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHide(true);
    setfilters(null);
    setCounter(1);
    setSearch(e.target.search.value);
    const urlsearch = `https://api.themoviedb.org/3/search/movie?api_key=03001bac9af23366932d6ea454838123&query=${e.target.search.value}`;

    if (e.target.search.value !== "") {
      seturl(urlsearch);

      navigate(`/listado?query=${e.target.search.value}`);
      return;
    }

    seturl(urlDefault);
  };

  return (
    <>
      {!token ? (
        <Link to={"/"} />
      ) : (
        <>
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
                  genres={genresList}
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
      )}
    </>
  );
};
