import {Header} from "@/shared/ui/Header/Header.tsx";
import {Footer} from "@/shared/ui/Footer/Footer.tsx";
import AppRouter from "@/app/providers/AppRouter/ui/AppRouter.tsx";
import {useStore} from "@/store/store.ts";
import {useEffect} from "react";

const App = () => {
	const { basketStore } = useStore();
	useEffect(() => {
		const basket = localStorage.getItem("basket");
		if (basket) {
			try {
				const basketJson = JSON.parse(basket);
				basketStore.setBasketProducts(basketJson);
			} catch {
				localStorage.setItem("basket", JSON.stringify([]));
			}
		}
	}, [basketStore]);
	return (
		<>
			<Header />
			<AppRouter/>
			<Footer />
		</>
	)
}

export default App;