import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { checkLogin } from "../componentes/helpers/checkLogin";
import { LoginForm } from "../componentes/LoginForm";

import "../styles/styleLogin.css";

export const Login = () => {
  let navigate = useNavigate();
  let tokenAlmacenado = sessionStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    checkLogin(email, password);
    navigate("/listado");
  };

  return (
    <>
      {tokenAlmacenado && <Navigate to="/listado" />}
      <div className="content">
        <div className="formulario">
          <div className="login">
            <LoginForm handleSubmit={handleSubmit}/>
          </div>
        </div>
      </div>
    </>
  );
};
