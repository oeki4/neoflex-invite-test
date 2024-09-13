import ProductCard from "../components/ProductCard.tsx";
import "../assets/scss/pages/catalog.scss";

export default function Catalog() {
  return (
    <section className="catalog">
      <h1 className="category__title">Наушники</h1>
      <div className="category">
        <div className="category__items">
          <ProductCard />
        </div>
      </div>
    </section>
  );
}
