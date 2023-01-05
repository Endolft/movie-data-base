import { List } from "../pages/List";
import { Details } from "../pages/Details";

export const routes = [
  {
    Component: List,
    path: "listado",
  },
  {
    Component: Details,
    path: "detalle/:id",
  },
];
