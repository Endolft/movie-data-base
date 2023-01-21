import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../styles/styleSearch.css";
export const Search = ({ handleSubmit , value}) => {
  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <input placeholder="Search Movie..." className="search" name="search"  defaultValue={value}/>
      <button type="onSubmit" className="button-serach">
        <FontAwesomeIcon icon={faSearch} size="xl" className="icon2" type="onSubmit"/>
        
      </button>
    </form>
  );
};
