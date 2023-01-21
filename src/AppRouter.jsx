import { Routes, Route } from "react-router-dom";
import { routes } from "./router/routes";
import { PrivateRoute } from "./componentes/layout/PrivateRoute";
import { PublicRoute } from "./componentes/layout/PublicRoute";
import { Login } from "./pages/Login";
import "./styles.css";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <PrivateRoute>
                <Component />
              </PrivateRoute>
            }
          />
        ))}

        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />{" "}
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
};
