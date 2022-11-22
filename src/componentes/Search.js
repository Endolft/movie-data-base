import React from 'react'
import "../styles/styleSearch.css"
export const Search = ({handlesubmit}) => {
  return (
    <form className="form-search" onSubmit={handlesubmit}>
    <input
      placeholder="Search Movie..."
      className="search"
      name="search"
    />
    <button type="onSubmit" className="button-serach">
      {" "}
      search{" "}
    </button>
  </form>
    )
}
