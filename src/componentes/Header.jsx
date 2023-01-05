import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import "./styleHeader.css";
import { Social } from "./login components/Social";

export const Header = () => {
  const [list, setlist] = useState(false);
  const navigate = useNavigate();

  const change = (e) => {
    setlist(!list);
  };

  const out = (e) => {
    e.preventDefault(); 
    sessionStorage.removeItem("token")
    navigate("/");
  };
  const refresh = () => {
    if (window.location.pathname === "/listado") {
      window.location.reload();
      return;
    }
    navigate("/listado");
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark " id="header">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://img.freepik.com/vector-premium/diseno-logotipo-camara-video-vintage-produccion-peliculas-cine_227744-487.jpg"
              alt=""
              width="30"
              height="24"
              onClick={refresh}
              className="img"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <FontAwesomeIcon
              className="tuerca"
              onClick={change}
              icon={faUser}
            />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Setting
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav  flex-grow-1 pe-3" id="ul-setting">
                <li className="nav-item" onClick={out}>
                  <FontAwesomeIcon icon={faSignOut} /> <p>Log out </p>
                </li>

                <li className="nav-item">
                  <Social />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
