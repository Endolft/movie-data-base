import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import "./styleHeader.css";

export const Header = () => {
  const [token, settoken] = useState("");
  const [list, setlist] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    settoken(sessionStorage.getItem("token"));
  }, []);

  const change = (e) => {
    setlist(!list);
  };

  const out = (e) => {
    e.preventDefault();
    settoken(sessionStorage.removeItem("token"));
    navigate("/");
  };
  const refresh = () => {
    
    if (window.location.pathname === "/listado") {
      window.location.reload(); 
      return
    }
    navigate("/listado");
  };

  return (
    <>
      {!token ? (
        <Link to={"/"} />
      ) : (
        <nav className="header">
          <div className="container-header">
            <div className="img-position">
              <div>
                <img
                  onClick={refresh}
                  className="logo"
                  src="https://img.freepik.com/vector-premium/diseno-logotipo-camara-video-vintage-produccion-peliculas-cine_227744-487.jpg"
                  alt="fescription "
                />
              </div>
            </div>

            <div className="user-container ">
              <div className="ul-show ">
                <FontAwesomeIcon
                  className="tuerca"
                  onClick={change}
                  icon={faUser}
                />
              </div>

              <div
                className={
                  list ? "list animate__animated animate__fadeInDown " : "hide"
                }
              >
                <div className="icon-list" onClick={out}>
                  <FontAwesomeIcon icon={faSignOut} /> <p>Log out </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
