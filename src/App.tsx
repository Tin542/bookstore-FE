import { Routes, Route } from "react-router-dom";

import "./App.css";
import pageRouters from "./pages/routes";

function App() {
  return (
    <Routes>
      {pageRouters.map(({ component: Component, path, ...rest }) => {
        return <Route element={<Component />} key={path} path={path} {...rest} />;
      })}
    </Routes>
  );
}

export default App;
