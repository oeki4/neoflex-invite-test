import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer.tsx";
import "../assets/scss/components/router.scss";
import { useEffect } from "react";
import { useStore } from "../store/store.ts";
import { observer } from "mobx-react";

const Router = observer(() => {
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
  }, []);
  return (
    <div className="router">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
});

export default Router;
