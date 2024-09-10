import { createBrowserRouter } from "react-router-dom";
import Catalog from "../pages/Catalog.tsx";
import Router from "./Router.tsx";

const routes = createBrowserRouter([
  {
    Component: Router,
    children: [
      {
        path: "/",
        Component: Catalog,
      },
    ],
  },
]);

export default routes;
