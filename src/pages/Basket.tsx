import "../assets/scss/pages/basket.scss";
import BasketCard from "../components/BasketCard.tsx";

export default function Basket() {
  return (
    <section className="basket">
      <h2 className="basket__subtitle">Корзина</h2>
      <div className="basket__inner">
        <div className="basket__inner-cards">
          <BasketCard />
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
