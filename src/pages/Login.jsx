import React from "react";
import { Navigate } from "react-router-dom";

import { LoginForm } from "../componentes/login components/LoginForm";
import { Helmet } from "react-helmet-async";
import "../styles/styleLogin.css";

export const Login = () => {
  const tokenAlmacenado=sessionStorage.getItem("token")
  return (
    <>
    <Helmet>
      <title> Login </title>
      <meta name="description" content=" Login to see, the new movies of this year and more  "/>
      <link rel='canonical' href='/' />
    </Helmet>
      {tokenAlmacenado && <Navigate to="/listado" />}
      <div className="content   ">
        <div className="formulario ">
          <div
            className="login animate__animated animate__fadeInDown animate__bounce"
            id="container-form"
          >
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};
