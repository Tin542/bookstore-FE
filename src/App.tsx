import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";

import pageRouters from "./pages/routes";
import Main from "./shared/components/Layout/Main";
import { CUSTOMER_PATH } from "./shared/constants/path";

import './index.css'

function App() {
  return (
    <Main>
      <Suspense
        fallback={<h1 style={{ textAlign: "center" }}>Loading...</h1>}>
        <Routes>
          {pageRouters.map(({ component: Component, path, ...rest }) => {
            return <Route element={<Component />} path={path} {...rest} />;
          })}
          <Route
            path="/"
            element={<Navigate replace to={CUSTOMER_PATH.HOME} />}
          />
          
        </Routes>
      </Suspense>
    </Main>
  );
}

export default App;
