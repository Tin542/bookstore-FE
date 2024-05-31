import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";

import pageRoutes from "./pages/routes";
import Main from "./shared/components/Layout/Main";
import { CUSTOMER_PATH } from "./shared/constants/path";
// import ProtectedRoute from "./shared/routes/protected.routes";

import "./index.css";
import ProtectedRoute from "./shared/routes/protected.routes";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#001529",
        },
        components: {
          Steps: {
            finishIconBorderColor: "#001529",
          },
        },
      }}>
      <Main>
        <Suspense
          fallback={<h1 style={{ textAlign: "center" }}>Loading...</h1>}>
          <Routes>
            {pageRoutes.map(
              ({
                component: Component,
                path,
                protected: isProtected,
                ...rest
              }) => {
                if (isProtected) {
                  return (
                    <Route
                      {...rest}
                      key={path}
                      path={path}
                      element={
                        <ProtectedRoute>
                          <Component />
                        </ProtectedRoute>
                      }
                    />
                  );
                }
                return (
                  <Route
                    {...rest}
                    key={path}
                    path={path}
                    element={<Component />}
                  />
                );
              }
            )}

            <Route
              path="/"
              element={<Navigate replace to={CUSTOMER_PATH.HOME} />}
            />
          </Routes>
        </Suspense>
      </Main>
    </ConfigProvider>
  );
}

export default App;
