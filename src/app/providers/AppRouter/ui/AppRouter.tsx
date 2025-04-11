import {memo, Suspense, useCallback} from "react";
import {Route, Routes} from "react-router";
import {routeConfig} from "@/shared/config/routes/routes";
import {RouteProps} from "react-router-dom";


const AppRouter = () => {
	const renderWithWrapper = useCallback((route: RouteProps) => {

		const element = (
			<Suspense fallback={<p>Loading...</p>}>
				{route.element}
			</Suspense>
		)

		return (
			<Route
				key={route.path}
				path={route.path}
				element={element}
			/>
		)
	}, []);

	return (
		<Routes>
			{Object.values(routeConfig).map(renderWithWrapper)}
		</Routes>
	);
};

export default memo(AppRouter);