import "../assets/scss/pages/basket.scss";
import BasketCard from "../components/BasketCard.tsx";
import { useStore } from "../store/store.ts";
import { observer } from "mobx-react";
import { useEffect } from "react";

const Basket = observer(() => {
  const { basketStore } = useStore();

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

  useEffect(() => {
    const newPrice = basketStore.basketProducts.reduce(
      (sum, el) =>
        el.priceWithDiscount
          ? sum + el.priceWithDiscount * el.amount
          : sum + el.price * el.amount,
      0,
    );
    basketStore.setResultPrice(newPrice);
  }, [basketStore.basketProducts]);

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
            <p className="order__info-price">₽ {basketStore.resultPrice}</p>
          </div>
          <button className="order__btn">Перейти к оформлению</button>
        </div>
      </div>
    </section>
  );
});

export default Basket;
