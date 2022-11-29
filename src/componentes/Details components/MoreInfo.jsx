import React from "react";
import "../../styles/styleMoreInfo.css";

export const MoreInfo = ({ movie }) => {
  return (
    <div className="more-info">
      <a
        href={`https://www.imdb.com/title/${movie.imdb_id}/?ref_=hm_fanfav_tt_i_1_pd_fp1`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="imbd" alt=""></img>
      </a>

      <span className="subtitle">Production :</span>

      <div>
        <section>
          {movie.production_companies.map((companies) => {
            return (
              <div key={companies.name} className="companies-container">
                {companies.name}
              </div>
            );
          })}
        </section>
      </div>

      <span className="subtitle">Overview:</span>

      <p>{movie.overview} </p>
    </div>
  );
};
