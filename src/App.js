import { Routes, Route } from "react-router-dom";
import { Details } from "./pages/Details";
import { Login } from "./pages/Login";
import { List } from "./pages/List";

import "./styles.css";

export const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/listado/" element={<List />} />
        <Route path="/detalle/:id" element={<Details />} />
      </Routes>
    </>
  );
};
