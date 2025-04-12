import { ProductCard } from "@/entities/Product";
import styles from "./catalog-page.module.scss";
import products from "@/shared/mocks/products.json";
import ProductModal from "../ProductModal/ProductModal.tsx";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import { getProductModalActive } from "../../model/selectors/productModalActiveSelector.ts";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector/useAppSelector.ts";
import { createPortal } from "react-dom";

export const CatalogPage = observer(() => {
  const { t } = useTranslation();
  const productModalActive = useAppSelector(getProductModalActive);
  return (
    <>
      <section className={styles.catalog}>
        <h1 className={styles.categoryTitle}>{t("Headphones")}</h1>
        <div className={styles.category}>
          <div className={styles.categoryItems}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      {productModalActive && createPortal(<ProductModal />, document.body)}
    </>
  );
});
