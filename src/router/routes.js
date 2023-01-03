import React from "react";
import { List } from "../pages/List";
import { Details } from "../pages/Details";
import { Login } from "../pages/Login";

export const routes = [
  {
    Component: Login,
    path: "/",
  },

  {
    Component: List,
    path: "listado",
  },
  {
    Component: Details,
    path: "detalle/:id",
  },
];
