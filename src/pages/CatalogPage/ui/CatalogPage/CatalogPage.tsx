import { ProductCard } from "@/entities/Product";
import "./catalog-page.scss";
import products from "@/shared/mocks/products.json";
import { useStore } from "@/store/store.ts";
import ProductModal from "../ProductModal/ProductModal.tsx";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import { getProductModalActive } from "../../model/selectors/productModalActiveSelector.ts";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector/useAppSelector.ts";
import { createPortal } from "react-dom";

export const CatalogPage = observer(() => {
  const { t } = useTranslation();
  const productModalActive = useAppSelector(getProductModalActive);
  const { userStore } = useStore();
  return (
    <>
      <section className="catalog">
        <h1 className="category__title">{t("Headphones")}</h1>
        <div className="category">
          <div className="category__items">
            {products.map((product) => (
              <ProductCard
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
          <ProductModal currencyRate={userStore.lang?.currencyRate || 1} />,
          document.body,
        )}
    </>
  );
});
