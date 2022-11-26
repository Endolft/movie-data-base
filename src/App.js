import { Routes, Route } from "react-router-dom";
import { Detalles } from "./pages/Detalles";
import { Login } from "./pages/Login";
import { Listado } from "./pages/Listado";

import "./styles.css";

export const App = () => {
  return (
    <>
        
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/detalle/:id" element={<Detalles />} />
      </Routes>
    </>
  );
};
