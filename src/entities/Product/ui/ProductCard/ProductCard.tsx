import styles from "./product-card.module.scss";
import Star from "@/shared/ui/icons/Star.tsx";
import { useTranslation } from "react-i18next";
import { priceNumToStr } from "@/shared/lib/priceNumToStr.ts";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import React, { useCallback } from "react";
import { catalogPageSliceActions } from "@/pages/CatalogPage";
import { basketSliceActions } from "@/entities/Basket";
import { getLang } from "@/entities/User";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector/useAppSelector.ts";
import { Product } from "@/entities/Product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const lang = useAppSelector(getLang);
  const onAddProductToBasket = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      if (product) {
        dispatch(basketSliceActions.addProductToBasket(product));
      }
    },
    [dispatch, product],
  );

  const onShowProductModal = useCallback(() => {
    dispatch(catalogPageSliceActions.showProductModal());
    dispatch(catalogPageSliceActions.setSelectedProduct(product));
  }, [dispatch, product]);
  return (
    <div onClick={onShowProductModal} className={styles.productCard}>
      <div className={styles.productCardImgWrapper}>
        <img
          src={`/img/products/${product.photo}`}
          alt=""
          className={styles.productCardImg}
        />
      </div>
      <div className={styles.productCardInfo}>
        <p className={styles.productCardName}>{product.title}</p>
        {product.priceWithDiscount ? (
          <p className={styles.productCardPrice}>
            {t("${{num}}", {
              num: priceNumToStr(product.priceWithDiscount * lang.currencyRate),
            })}
            <span className={styles.productCardDiscount}>
              {t("${{num}}", {
                num: priceNumToStr(product.price * lang.currencyRate),
              })}
            </span>
          </p>
        ) : (
          <p className={styles.productCardPrice}>
            {t("${{num}}", {
              num: priceNumToStr(product.price * lang.currencyRate),
            })}
          </p>
        )}
        <div className={styles.productCardRateWrapper}>
          <Star />
          <p className={styles.productCardRate}>{product.rate}</p>
        </div>
        <button
          onClick={onAddProductToBasket}
          className={styles.productCardBuyBtn}
        >
          {t("Buy")}
        </button>
      </div>
    </div>
  );
};
