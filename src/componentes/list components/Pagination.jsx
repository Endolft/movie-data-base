import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
    handleFilters({ ...filters, page: e.target.innerHTML });
  };

  const increment = () => {
    let pageIncremnt = pageParam + 1;
    handleFilters({ search: search, genre: genre, page: pageIncremnt });
  };
  const decrement = () => {
    let pageDecrement = pageParam - 1;
    handleFilters({ search: search, genre: genre, page: pageDecrement });
  };

  return (
    <div className="pagination">
      {pageParam > 1 && (
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="xl"
          className={"button-pagination"}
          type="onSubmit"
          onClick={decrement}
        />
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
        <FontAwesomeIcon
          icon={faArrowRight}
          size="xl"
          className={"button-pagination"}
          type="onSubmit"
          onClick={increment}
        />
      )}
    </div>
  );
};
