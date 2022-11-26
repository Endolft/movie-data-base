import React from "react";
import "../styles/stylesTitles.css";

export const Titles = ({ movie }) => {
  const { title, tagline } = movie;
  
  return (
    <div>
      <h1>{title}</h1>
      <h2>{tagline}</h2>
    </div>
  );
};
