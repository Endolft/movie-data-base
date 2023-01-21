import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./AppRouter";
import {HelmetProvider} from "react-helmet-async";

import "./styles.css";
import { AuthProvider } from "./componentes/context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <AuthProvider>
        <HelmetProvider>
          <AppRouter />
        </HelmetProvider>
      </AuthProvider>
    </BrowserRouter>
  </>
);
