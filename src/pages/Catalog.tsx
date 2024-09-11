import ProductCard from "../components/ProductCard.tsx";
import "../assets/scss/pages/products.scss";

export default function Catalog() {
  return (
    <section className="catalog">
      <h1 className="category__title">Наушники</h1>
      <div className="category">
        <div className="category__items">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}
