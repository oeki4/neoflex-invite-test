import { createBrowserRouter } from "react-router-dom";
import Catalog from "../pages/Catalog.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Catalog,
  },
]);

export default routes;
