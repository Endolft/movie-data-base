import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { checkLogin } from "../componentes/login components/checkLogin";
import { LoginForm } from "../componentes/login components/LoginForm";

import "../styles/styleLogin.css";

export const Login = () => {
  let navigate = useNavigate();
  let tokenAlmacenado = sessionStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    checkLogin(email, password);

    if (!tokenAlmacenado) {
      navigate("/");
      return;
    }
    navigate("/listado");
  };

  return (
    <>
      {tokenAlmacenado && <Navigate to="/listado" />}
      <div className="content   ">
        <div className="formulario ">
          <div className="login animate__animated animate__fadeInDown animate__bounce">
            <LoginForm handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};
