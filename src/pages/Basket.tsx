import "../assets/scss/pages/basket.scss";
import BasketCard from "../components/BasketCard.tsx";
import { useEffect } from "react";
import { useStore } from "../store/store.ts";
import { observer } from "mobx-react";

const Basket = observer(() => {
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

  const setBasketItemAmount = (id: number, value: number) => {
    if (value < 1) {
      basketStore.setBasketProducts(
        basketStore.basketProducts.filter((el) => el.id !== id),
      );
      localStorage.setItem(
        "basket",
        JSON.stringify(basketStore.basketProducts),
      );
      return;
    }
    basketStore.setBasketProducts(
      basketStore.basketProducts.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            amount: value,
          };
        }
        return el;
      }),
    );
    localStorage.setItem("basket", JSON.stringify(basketStore.basketProducts));
  };

  const deleteItemFromBasket = (id: number) => {
    basketStore.setBasketProducts(
      basketStore.basketProducts.filter((el) => el.id !== id),
    );
    localStorage.setItem("basket", JSON.stringify(basketStore.basketProducts));
  };

  return (
    <section className="basket">
      <h2 className="basket__subtitle">Корзина</h2>
      <div className="basket__inner">
        <div className="basket__inner-cards">
          {basketStore.basketProducts.map((product, id) => (
            <BasketCard
              setBasketItemAmount={setBasketItemAmount}
              deleteItemFromBasket={deleteItemFromBasket}
              key={id}
              product={product}
            />
          ))}
        </div>
        <div className="order">
          <div className="order__info">
            <p className="order__info-text">Итого</p>
            <p className="order__info-price">₽ 2 927</p>
          </div>
          <button className="order__btn">Перейти к оформлению</button>
        </div>
      </div>
    </section>
  );
});

export default Basket;
