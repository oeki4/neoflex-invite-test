import "../assets/scss/pages/basket.scss";
import BasketCard from "../components/BasketCard.tsx";

export default function Basket() {
  return (
    <section className="basket">
      <h2 className="basket__subtitle">Корзина</h2>
      <div>
        <BasketCard />
      </div>
    </section>
  );
}
