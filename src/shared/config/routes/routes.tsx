import { CatalogPage } from "@/pages/CatalogPage";
import { RouteProps } from "react-router-dom";
import { BasketPage } from "@/pages/BasketPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export enum AppRoutes {
  MAIN = "main",
  BASKET = "basket",
  NOT_FOUND = "not-found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.BASKET]: "/basket",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <CatalogPage />,
  },
  [AppRoutes.BASKET]: {
    path: RoutePath.basket,
    element: <BasketPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath["not-found"],
    element: <NotFoundPage />,
  },
};
