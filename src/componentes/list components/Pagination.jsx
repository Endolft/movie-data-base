import { useEffect, useState } from "react";

export const Pagination = ({ pages, handleFilters, filters }) => {
  const [lastPage, setLastPage] = useState(10);
  const [firstPage, setFirstPage] = useState(1);

  const pagination = Array(pages + 1);
  const pageArray = [...pagination.keys()];

  let arrayCut = pageArray.slice(firstPage, lastPage);

  const pageParam = parseInt(filters.page);

  const genre = filters.genre || "";
  const search = filters.search || "";

  useEffect(() => {
    if (pageParam < firstPage) {
      setFirstPage(pageParam - 8);
      setLastPage(pageParam + 1);

      return;
    }
    if (pageParam === lastPage) {
      setFirstPage(pageParam);

      setLastPage(pageParam + 9);

      return;
    }
  }, [filters.page]);

  useEffect(() => {
    setFirstPage(1);
    setLastPage(10);
  }, [filters.search, filters.genre]);

  const handlePage = (e) => {
    handleFilters({ page: e.target.innerHTML, search: search, genre: genre });
  };

  const increment = () => {
    let pageIncremnt = pageParam + 1;
    handleFilters({ page: pageIncremnt, search: search, genre: genre });
  };
  const decrement = () => {
    let pageDecrement = pageParam - 1;
    handleFilters({ page: pageDecrement, search: search, genre: genre });
  };

  return (
    <div className="pagination">
      {pageParam > 1 && (
        <button onClick={decrement} className={"button-pagination"}>
          {"<"}
        </button>
      )}

      {arrayCut.map((page, index) => {
        return (
          <li
            className={page === pageParam ? "number-select" : "number"}
            onClick={handlePage}
            key={index}
          >
            {page}
          </li>
        );
      })}
      {pageParam < pages && (
        <button onClick={increment} className={"button-pagination"}>
          {">"}
        </button>
      )}
    </div>
  );
};
