import { useEffect, useState } from "react";

export const useFetchDetails = ({ url, params, key }) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  const getResource = async (url) => {
    const res = await fetch(url);
    const jsonResponse = await res.json();

    setResponse(jsonResponse);
    setisLoading(false);
  };

  useEffect(() => {
    if (params) {
      const paramToReplace = key ? params[key] : params;
      let urlReplaced = url.replace("{param}", paramToReplace);

      getResource(urlReplaced);
    }
  }, [params]);

  return { response, isLoading };
};
