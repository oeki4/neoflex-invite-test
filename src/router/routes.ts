import { createBrowserRouter } from "react-router-dom";
import Catalog from "../pages/Catalog.tsx";
import Router from "./Router.tsx";
import Basket from "../pages/Basket.tsx";

const routes = createBrowserRouter([
  {
    Component: Router,
    children: [
      {
        path: "/",
        Component: Catalog,
      },
      {
        path: "/basket",
        Component: Basket,
      },
    ],
  },
]);

export default routes;
