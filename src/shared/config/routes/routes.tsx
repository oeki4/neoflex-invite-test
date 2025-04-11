import {CatalogPage} from "@/pages/CatalogPage";
import {RouteProps} from "react-router-dom";
import {BasketPage} from "@/pages/BasketPage";

export enum AppRoutes {
	MAIN = 'main',
	BASKET = 'basket'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.BASKET]: '/basket',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <CatalogPage/>,
	},
	[AppRoutes.BASKET]: {
		path: RoutePath.basket,
		element: <BasketPage/>
	},
}