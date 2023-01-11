import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export const useFilters = () => {
  const [params] = useSearchParams();

  const navigate = useNavigate();
  const filters = {
    search: params.get("search"),
    genre: params.get("genre"),
    page: params.get("page"),
  };

  const handleFilters = (newFilters) => {
    const query = { ...params, ...newFilters };

    navigate({
      search: `?${createSearchParams(query)}`,
    });
  };

  return { filters, handleFilters };
};
