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
      <div className="colums">
        <div className="d-flex justify-content-end mt-2">
          <button
            type="onSubmit"
            className="button"
          >
            Send
          </button>
        </div>
      </div>
      <Social />
    </form>
  );
};
