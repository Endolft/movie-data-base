import { Navigate } from "react-router-dom";
import { LoginForm } from "../componentes/login-components/LoginForm";

import "../styles/styleLogin.css";

export const Login = () => {
  const tokenAlmacenado = sessionStorage.getItem("token");

  return (
    <>
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
