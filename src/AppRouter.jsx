import { Routes, Route } from "react-router-dom";
import { routes } from "./router/routes";
import { Layout } from "./componentes/layout/Layout";
import ScrollToTop from "./componentes/list components/ScrollToTop";
import { Login } from "./pages/Login";
import "./styles.css";

export const AppRouter = () => {
  
  return (
    <>
      <ScrollToTop />
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        ))}
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};
