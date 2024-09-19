import ProductCard from "../components/ProductCard.tsx";
import "../assets/scss/pages/catalog.scss";
import products from "./../mocks/products.json";
import { useStore } from "../store/store.ts";
import { BasketProduct } from "../types/store/basket.types.ts";
import { Product } from "../types/pages/catalog.types.ts";
import ProductModal from "../components/Modals/ProductModal.tsx";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";

const Catalog = observer(() => {
  const { t } = useTranslation();
  const { basketStore, modalsStore, userStore } = useStore();
  const addToBasket = (product: Product | null) => {
    if (!product) return;
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
        <h1 className="category__title">{t("Headphones")}</h1>
        <div className="category">
          <div className="category__items">
            {products.map((product) => (
              <ProductCard
                addToBasket={addToBasket}
                key={product.id}
                product={product}
                toggleProductModal={modalsStore.toggleProductModal}
                currencyRate={userStore.lang?.currencyRate || 1}
              />
            ))}
          </div>
        </div>
      </section>
      <ProductModal
        product={modalsStore.selectedProduct}
        isActive={modalsStore.productModalActive}
        addToBasket={addToBasket}
        toggleIsActive={modalsStore.toggleProductModal}
        currencyRate={userStore.lang?.currencyRate || 1}
      />
    </>
  );
});

export default Catalog;
