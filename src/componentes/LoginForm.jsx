import React from "react";
import { Social } from "./Social";

export const LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1 id="title"> Welcome!</h1>
      
      <div className="colums">
        <label className="labels" for="forEmail">
          Email
        </label>

        <input
          type="text"
          name="email"
          className="form-control"
          id="formEmail"
          placeholder="gmail@.com"
          defaultValue={"gmail@.com"}
        />
      </div>
      <div className="colums">
        <label className="labels" for="forPassword">
          Password
        </label>

        <input
          type="password"
          name="password"
          className="form-control"
          id="formPassword"
          placeholder="gmail@.com"
          defaultValue={"gmail@.com"}
        />
      </div>
      <div className="row mb-4">
        <div className="d-flex justify-content-end ">
          <button
            type="onSubmit"
            className="btn btn-dark btn-lg  align-items-center"
          >
            Send
          </button>
        </div>
      </div>
      <Social />
    </form>
  );
};
