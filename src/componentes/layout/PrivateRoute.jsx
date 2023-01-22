import React, { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Header } from "../Header";
import { Login } from "../../pages/Login";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const navigate = useNavigate();

  return !logged ? (
    <>
    {navigate("/")}
      <Login />
     
    </>
  ) : (
    <>
      <Header />
      {children}
    </>
  );
};
