import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Header } from "../Header";
import { Login } from "../../pages/Login";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return !logged ? (
    <>
      <Link to={"/"} />
      <Login />
    </>
  ) : (
    <>
      <Header />
      {children}
    </>
  );
};
