import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/styleLogin.css";

export const Formulario = () => {
  let navigate = useNavigate();
  let tokenAlmacenado = sessionStorage.getItem("token");

  const handlesubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if ([email, password].includes("")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "email y contraseña no pueden estar vacios",
        color: "#f8d388",
        background: "#4b0f0c",
        showConfirmButton: true,
      });

      return;
    }

    if (email !== "gmail@.com") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ingrese un correo valido!",
        color: "#f8d388",
        background: "#4b0f0c",
        showConfirmButton: false,
        timer: 1500,
      });

      return;
    }
    if (email !== "gmail@.com" || password !== "1234") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario o contraseña incorrecto!",
        color: "#f8d388",
        background: "#4b0f0c",
        showConfirmButton: true,
      });

      return;
    }

    const tokenRecibido = "token ficticio";
    sessionStorage.setItem("token", tokenRecibido);

    navigate("/listado");
  };
  return (
    <>
      {tokenAlmacenado && <Navigate to="/listado" />}
      <div className="content">
        <div className="formulario">
          <div className="login">
            <form onSubmit={handlesubmit}>
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
                  placeholder="1234"
                  defaultValue={"1234"}
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

              <div className="social">
                <a href="http://twitter.com" rel="noopenernoreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="xl" />
                </a>
                <a href="http://facebook.com" rel="noopenernoreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="xl" />
                </a>
                <a href="http://instagram.com" rel="noopenernoreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
