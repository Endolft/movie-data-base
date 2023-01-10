import React from "react";
import "../../styles/styleSearch.css";
export const Search = ({ handleSubmit , value}) => {
  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <input placeholder="Search Movie..." className="search" name="search"  defaultValue={value}/>
      <button type="onSubmit" className="button-serach">
        Search
      </button>
    </form>
  );
};
