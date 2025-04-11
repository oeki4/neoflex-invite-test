import { ProductCard } from "@/entities/Product";
import "./catalog-page.scss";
import products from "@/shared/mocks/products.json";
import { useStore } from "@/store/store.ts";
import ProductModal from "../ProductModal/ProductModal.tsx";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import { Product } from "@/entities/Product";
import { BasketItem } from "@/entities/Basket";
import { getProductModalActive } from "../../model/selectors/productModalActiveSelector.ts";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector/useAppSelector.ts";
import { createPortal } from "react-dom";

export const CatalogPage = observer(() => {
  const { t } = useTranslation();
  const productModalActive = useAppSelector(getProductModalActive);
  const { basketStore, userStore } = useStore();
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
      const basketJson: BasketItem[] = JSON.parse(basket);

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
                currencyRate={userStore.lang?.currencyRate || 1}
              />
            ))}
          </div>
        </div>
      </section>
      {productModalActive &&
        createPortal(
          <ProductModal
            // addToBasket={addToBasket}
            currencyRate={userStore.lang?.currencyRate || 1}
          />,
          document.body,
        )}
    </>
  );
});
