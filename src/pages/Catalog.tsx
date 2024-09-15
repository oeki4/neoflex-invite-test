import ProductCard from "../components/ProductCard.tsx";
import "../assets/scss/pages/catalog.scss";
import products from "./../mocks/products.json";

export default function Catalog() {
  const addToBasket = (product: {
    id: number;
    title: string;
    photo: string;
    rate: number;
    price: number;
    priceWithDiscount: number | null;
  }) => {
    const basket = localStorage.getItem("basket");
    if (basket == null) {
      const basketJson = [];
      basketJson.push({
        ...product,
        amount: 1,
      });
      localStorage.setItem("basket", JSON.stringify(basketJson));
      return;
    }
    try {
      const basketJson = JSON.parse(basket);

      const basketItemIndex = basketJson.findIndex(
        (el) => el.id === product.id,
      );

      if (basketItemIndex != -1) {
        basketJson[basketItemIndex].amount += 1;
      } else {
        basketJson.push({
          ...product,
          amount: 1,
        });
      }

      localStorage.setItem("basket", JSON.stringify(basketJson));
    } catch {
      localStorage.setItem("basket", JSON.stringify([]));
    }
  };

  return (
    <section className="catalog">
      <h1 className="category__title">Наушники</h1>
      <div className="category">
        <div className="category__items">
          {products.map((product) => (
            <ProductCard
              addToBasket={addToBasket}
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
