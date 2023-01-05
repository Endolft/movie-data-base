import { useEffect, useState } from "react";


export const Pagination = ({pages,increment, decrement,counter,setcounter,search,filters,}) => {
  const [lastPage, setLastPage] = useState(10);
  const [firstPage, setFirstPage] = useState(1);
  
  

  const pagination = Array(pages + 1);
  const pageArray = [...pagination.keys()];

  let arrayCut = pageArray.slice(firstPage, lastPage);

  useEffect(() => {
    if (counter < firstPage) {
      setFirstPage(counter - 8);
      setLastPage(counter + 1);

      return;
    }
    if (counter === lastPage) {
      setFirstPage(counter);

      setLastPage(counter + 9);

      return;
    }
  }, [counter]);

  useEffect(() => {
    setFirstPage(1);
    setLastPage(10);
  }, [search, filters]);

  return (
    <div className="pagination">
      {counter>1 && 
      <button
      onClick={decrement}
      className={  "button-pagination"}
    >
      {"<"}
    </button>
      }
      
      {arrayCut.map((page, index) => {
        return (
          <li
            className={page === counter ? "number-select" : "number"}
            onClick={() => setcounter(page)}
            key={index}
          >
           {page}
          </li>
        );
      })}
      {counter<pages&& <button
        onClick={increment}
        className={ "button-pagination"}
      >
        {">"}
      </button>}
    </div> 
  );
};
