import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import { Social } from "./login-components/Social";
import logo from "../componentes/images/logo.jpeg";
import { AuthContext } from "./context/AuthContext";
import { useFilters } from "../Hooks/useFilters";
import "./styleHeader.css";

export const Header = () => {
  const [list, setlist] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const { filters, handleFilters } = useFilters();
  const change = (e) => {
    setlist(!list);
  };

  const out = (e) => {
    logout();
    sessionStorage.removeItem("token");
    navigate("/");
  };
  const refresh = () => {
    if (window.location.pathname === "/listado") {
      handleFilters({ search: "", genre: "", page: "1" });
      window.location.reload();
      return;
    }
    navigate("/listado");
  };

  return (
    <>
      <nav className="navbar " id="header">
        <div className="container-fluid">
          <div className="logo-search">
            <a className="navbar-brand">
              <img
                src={logo}
                alt=""
                width="30"
                height="24"
                onClick={refresh}
                className="img"
              />
            </a>
          </div>
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
              <h5> welcome {user?.name}</h5>
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
