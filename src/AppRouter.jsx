import { Routes, Route, Navigate } from "react-router-dom";

import "./styles.css";
import { routes } from "./router/routes";
import { Layout } from "./componentes/layout/Layout";

export const AppRouter = () => {
  console.log(routes);
  return (
    <>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={
          <Layout>
            <Component />
          </Layout>
          } />
        ))}
        <Route path="/" element={<Navigate to={routes[0].path} replace />} />
      </Routes>
    </>
  );
};
