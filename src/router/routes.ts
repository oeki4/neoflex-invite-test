import { createBrowserRouter } from "react-router-dom";
import Router from "./Router.tsx";
import { BasketPage } from "@/pages/BasketPage";
import {CatalogPage} from "@/pages/CatalogPage";

const routes = createBrowserRouter([
  {
    Component: Router,
    children: [
      {
        path: "/",
        Component: CatalogPage,
      },
      {
        path: "/basket",
        Component: BasketPage,
      },
    ],
  },
]);

export default routes;
