import "../assets/scss/pages/basket.scss";
import BasketCard from "../components/BasketCard.tsx";
import { useEffect, useState } from "react";

export default function Basket() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const basket = localStorage.getItem("basket");
    if (basket) {
      try {
        const basketJson = JSON.parse(basket);
        setProducts(basketJson);
      } catch {
        localStorage.setItem("basket", JSON.stringify([]));
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) return;
    localStorage.setItem("basket", JSON.stringify(products));
  }, [products]);

  const setBasketItemAmount = (id: number, value: number) => {
    if (value < 1) {
      setProducts(products.filter((el) => el.id !== id));
      return;
    }
    setProducts(
      products.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            amount: value,
          };
        }
        return el;
      }),
    );
  };

  const deleteItemFromBasket = (id: number) => {
    setProducts(products.filter((el) => el.id !== id));
  };

  return (
    <section className="basket">
      <h2 className="basket__subtitle">Корзина</h2>
      <div className="basket__inner">
        <div className="basket__inner-cards">
          {products.map((product, id) => (
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
}
