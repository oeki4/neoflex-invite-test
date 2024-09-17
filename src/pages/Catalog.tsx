import ProductCard from "../components/ProductCard.tsx";
import "../assets/scss/pages/catalog.scss";
import products from "./../mocks/products.json";
import { useStore } from "../store/store.ts";
import { BasketProduct } from "../types/store/basket.types.ts";
import { Product } from "../types/pages/catalog.types.ts";
import ProductModal from "../components/Modals/ProductModal.tsx";
import { observer } from "mobx-react";

const Catalog = observer(() => {
  const { basketStore, modalsStore } = useStore();
  const addToBasket = (product: Product) => {
    const basket = localStorage.getItem("basket");
    if (basket == null) {
      const basketJson = [];
      basketJson.push({
        ...product,
        amount: 1,
      });
      localStorage.setItem("basket", JSON.stringify(basketJson));
      basketStore.setBasketProducts(basketJson);
      return;
    }
    try {
      const basketJson: BasketProduct[] = JSON.parse(basket);

      const basketItemIndex = basketJson.findIndex(
        (el) => el.id === product.id,
      );

      if (basketItemIndex != -1 && basketJson[basketItemIndex].amount) {
        basketJson[basketItemIndex].amount += 1;
      } else {
        basketJson.push({
          ...product,
          amount: 1,
        });
      }

      localStorage.setItem("basket", JSON.stringify(basketJson));
      basketStore.setBasketProducts(basketJson);
    } catch {
      localStorage.setItem("basket", JSON.stringify([]));
      basketStore.setBasketProducts([]);
    }
  };

  return (
    <>
      <section className="catalog">
        <h1 className="category__title">Наушники</h1>
        <div className="category">
          <div className="category__items">
            {products.map((product) => (
              <ProductCard
                addToBasket={addToBasket}
                key={product.id}
                product={product}
                toggleProductModal={modalsStore.toggleProductModal}
              />
            ))}
          </div>
        </div>
      </section>
      <ProductModal
        isActive={modalsStore.productModalActive}
        toggleIsActive={modalsStore.toggleProductModal}
      />
    </>
  );
});

export default Catalog;
