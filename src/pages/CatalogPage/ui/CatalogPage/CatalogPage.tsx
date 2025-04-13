import { ProductCard } from "@/entities/Product";
import styles from "./catalog-page.module.scss";
import products from "@/shared/mocks/products.json";
import ProductModal from "../ProductModal/ProductModal.tsx";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";

export const CatalogPage = observer(() => {
  const { t } = useTranslation();

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
      {createPortal(<ProductModal />, document.body)}
    </>
  );
});
