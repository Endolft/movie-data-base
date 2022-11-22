import { useEffect, useState } from "react";

export const useFetch = ({ url }) => {
  const [movieList, setMovieList] = useState([]);

  const getResource = async (url) => {
    const resp = await fetch(url);
    const jsonResponse = await resp.json();
    setMovieList(jsonResponse.results);
  };

  useEffect(() => {
   
      getResource(url);
    
  }, [url]);

  return { movieList };
};
