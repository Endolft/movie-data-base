import React from "react";
import { useForm } from "../../Hooks/useForm";
import { Social } from "./Social";

export const LoginForm = () => {
  const { formState, onInputChange, handleSubmit } = useForm({
    password: "",
    email: "",
  });

  const { password, email } = formState;

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1 id="title"> Welcome!</h1>

      <div className="colums">
        <label className="labels" for="email">
          Email
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="gmail@.com"
          name="email"
          id="formEmail"
          value={email}
          onChange={onInputChange}
          defaultValue={"gmail@.com"}
        />
      </div>
      <div className="colums">
        <label className="labels" for="password">
          Password
        </label>

        <input
          type="password"
          name="password"
          className="form-control"
          id="formPassword"
          placeholder="gmail@.com"
          value={password}
          onChange={onInputChange}
          defaultValue={"gmail@.com"}
        />
      </div>
      <div className="colums">
        <div className="d-flex justify-content-end mt-2">
          <button type="onSubmit" className="button">
            Send
          </button>
        </div>
      </div>
      <Social />
    </form>
  );
};
