import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [movieList, setMovieList] = useState({
    data: null,
    isLoanding: true,
    hasError: null,
    pages: null,
  });

  const getResource = async () => {
    const resp = await fetch(url);
    const data = await resp.json();

    setMovieList({
      data: data.results,
      isLoanding: false,
      hasError: null,
      pages: data.total_pages,
    });
  };

  useEffect(() => {
    getResource();
  }, [url]);

  return {
    data: movieList.data,
    isLoanding: movieList.isLoanding,
    hasError: movieList.hasError,
    pages: movieList.pages,
  };
};
