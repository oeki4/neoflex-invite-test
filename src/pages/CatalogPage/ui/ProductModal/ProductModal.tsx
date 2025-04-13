import styles from "./product-modal.module.scss";
import { useTranslation } from "react-i18next";
import { priceNumToStr } from "@/shared/lib/priceNumToStr.ts";
import Button from "@/shared/ui/Button/Button.tsx";
import Star from "@/shared/ui/icons/Star.tsx";
import Cross from "@/shared/ui/icons/Cross.tsx";
import { useCallback } from "react";
import { catalogPageSliceActions } from "@/pages/CatalogPage";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector/useAppSelector.ts";
import { getSelectedProduct } from "../../model/selectors/selectedProductSelector.ts";
import { basketSliceActions } from "@/entities/Basket";
import { getLang } from "@/entities/User";
import { getProductModalActive } from "@/pages/CatalogPage/model/selectors/productModalActiveSelector.ts";

const ProductModal = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const product = useAppSelector(getSelectedProduct);
  const productModalActive = useAppSelector(getProductModalActive);
  const lang = useAppSelector(getLang);
  const onCloseProductModal = useCallback(() => {
    dispatch(catalogPageSliceActions.hideProductModal());
  }, [dispatch]);

  const onAddProductToBasket = useCallback(() => {
    if (product) {
      dispatch(basketSliceActions.addProductToBasket(product));
    }
  }, [dispatch, product]);
  return (
    <div
      onClick={onCloseProductModal}
      className={`${styles.wrapper} ${productModalActive && styles.wrapperVisible}`}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.product}>
        <button
          onClick={onCloseProductModal}
          className={styles.productCloseBtn}
        >
          <Cross />
        </button>
        <div className={styles.productPhotoInfo}>
          <div className={styles.productPhoto}>
            <img src={`/img/products/${product?.photo}`} alt="" />
          </div>
          <div className={styles.productInfo}>
            <h2 className={styles.productTitle}>{product?.title}</h2>
            <div className={styles.productRatePrice}>
              <div className={styles.productRate}>
                <Star />
                <p className={styles.productRateValue}>{product?.rate}</p>
              </div>
              {product?.priceWithDiscount ? (
                <p className={styles.productPrice}>
                  {t("${{num}}", {
                    num: priceNumToStr(
                      product?.priceWithDiscount * lang.currencyRate,
                    ),
                  })}
                  <span className={styles.productDiscount}>
                    {t("${{num}}", {
                      num: priceNumToStr(product?.price * lang.currencyRate),
                    })}
                  </span>
                </p>
              ) : (
                <p className={styles.productPrice}>
                  {t("${{num}}", {
                    num: priceNumToStr(
                      (product?.price || 0) * lang.currencyRate,
                    ),
                  })}
                </p>
              )}
            </div>
            <Button onClick={onAddProductToBasket}>{t("Add to cart")}</Button>
          </div>
        </div>
        <h3 className={`${styles.productTitle} ${styles.productTitleMb10}`}>
          {t("Description")}
        </h3>
        <p
          className={`${styles.productText} ${styles.productTextWrap} ${styles.productTextMb10}`}
        >
          {product?.description}
        </p>
        <h3 className={`${styles.productTitle} ${styles.productTitleMb10}`}>
          {t("Characteristics")}
        </h3>
        <ul className={styles.characteristics}>
          {product?.characteristics &&
            product?.characteristics.map((item, index) => (
              <li key={index} className={styles.characteristicsItem}>
                <p className={styles.productText}>{item.name}</p>
                <div className={styles.characteristicsLine}></div>
                <p className={styles.productText}>{item.value}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductModal;
