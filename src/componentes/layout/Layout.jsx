import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../Header";

export const Layout = ({ children }) => {
  const [token, settoken] = useState("");

  useEffect(() => {
    settoken(sessionStorage.getItem("token"));
  }, []);
  return (
    <>
      {!token ? (
        <Link to={"/"} />
      ) : (
        <>
          <Header />
          {children}
        </>
      )}
    </>
  );
};
