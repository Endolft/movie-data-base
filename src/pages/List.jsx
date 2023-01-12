import { useFetch } from "../Hooks/useFetch.js";
import { useEffect, useState } from "react";
import { genresList } from "../componentes/data/genres";
import { Search } from "../componentes/list components/Search";
import { Filters } from "../componentes/list components/Filters";
import { MoviesList } from "../componentes/list components/MoviesList";
import { useFilters } from "../Hooks/useFilters.js";
import { Helmet } from "react-helmet-async";
import "../styles/styleListado.css";

const urlDefault = `https://api.themoviedb.org/3/discover/movie?api_key=03001bac9af23366932d6ea454838123&language=en-US&sort_by=popularity.desc&include_video=false`;

export const List = () => {
  const { filters, handleFilters } = useFilters();

  const [url, seturl] = useState(urlDefault);
  const [show, setshow] = useState(true);
  const [urlCanonical, setUrlCanonical] = useState(
    "http://localhost:3000/listado?page=1"
  );

  const { data, isLoanding, pages } = useFetch(url);
 

  useEffect(() => {
    handleFilters({ search: "", genre: "", page: "1" });
  }, []);
  const scroll = () => {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    
    if (filters.search) {
      seturl(
        `https://api.themoviedb.org/3/search/movie?api_key=03001bac9af23366932d6ea454838123&query=${filters.search}&page=${filters.page}`
      );
      scroll();
      setUrlCanonical(
        `/listado?search=${filters.search}&genre=&page=${filters.page}`
      );
      return;
    }
    if (filters.genre) {
      seturl(`${urlDefault}&with_genres=${filters.genre}&page=${filters.page}`);
      scroll();
      setUrlCanonical(
        `/listado?search=&genre=${filters.genre}&page=${filters.page}`
      );
      return;
    }
    seturl(`${urlDefault}&page=${filters.page}`);
    scroll();
    setUrlCanonical(
      `/listado?search=&genre=${filters.genre}&page=${filters.page}`
    );
  }, [filters]);

  const showfilter = () => {
    setshow(!show);
  };

  const handleSelectGenre = (e) => {
    let urlFilter = `${url}&with_genres=${e.target.value}&page=1`;
    seturl(urlFilter);
    handleFilters({ ...Filters,genre: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setshow(true);
    console.log(e.target.search.value);
    const urlsearch = `https://api.themoviedb.org/3/search/movie?api_key=03001bac9af23366932d6ea454838123&query=${e.target.search.value}&page=1`;

    seturl(urlsearch);

    handleFilters({ search: e.target.search.value, genre: "", page: "1" });
  };

  return (
    <>
      <Helmet>
        <title> List Movies</title>
        <meta
          name="description"
          content=" list with many new movies and all genres  "
        />
        <link rel="canonical" href={`${urlCanonical}`} />
      </Helmet>
      {isLoanding ? (
        <div className="loanding"></div>
      ) : (
        <div className="content-dark   animate__animated animate__fadeIn animate__bounce  animate__slow">
          <div className="searching">
            <Search handleSubmit={handleSubmit} value={filters.search} />
            <Filters
              handleSelectGenre={handleSelectGenre}
              showfilter={showfilter}
              show={show}
              genres={genresList}
              filters={parseInt(filters.genre)}
            />
          </div>
          <MoviesList
            movies={data}
            pages={pages}
            handleFilters={handleFilters}
            filters={filters}
          />
        </div>
      )}
    </>
  );
};
