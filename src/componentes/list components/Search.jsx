import React from "react";
import "../../styles/styleSearch.css";
export const Search = ({ handleSubmit }) => {
  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <input placeholder="Search Movie..." className="search" name="search" />
      <button type="onSubmit" className="button-serach">
        Search
      </button>
    </form>
  );
};
