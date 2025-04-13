import styles from "./basket-page.module.scss";
import BasketCard from "@/entities/Basket/ui/BasketCard/BasketCard.tsx";
import { useCallback, useEffect } from "react";
import paymentMethods from "@/shared/mocks/payment-methods.json";
import { useTranslation } from "react-i18next";
import { priceNumToStr } from "@/shared/lib/priceNumToStr.ts";
import Button from "@/shared/ui/Button/Button.tsx";
import PaymentModal from "../PaymentModal/PaymentModal.tsx";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector/useAppSelector.ts";
import {
  basketSliceActions,
  getBasketProducts,
  getResultPrice,
} from "@/entities/Basket";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import { basketPageSliceActions } from "@/pages/BasketPage";
import { createPortal } from "react-dom";
import { getLang } from "@/entities/User";

export const BasketPage = () => {
  const lang = useAppSelector(getLang);
  const basketProducts = useAppSelector(getBasketProducts);
  const resultPrice = useAppSelector(getResultPrice);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    const newPrice = basketProducts.reduce(
      (sum, el) =>
        el.priceWithDiscount
          ? sum + el.priceWithDiscount * el.amount
          : sum + el.price * el.amount,
      0,
    );
    dispatch(basketSliceActions.setResultPrice(newPrice));
  }, [basketProducts, dispatch]);

  const onShowPaymentModal = useCallback(() => {
    if (resultPrice <= 0) return;
    dispatch(basketPageSliceActions.showPaymentModal());
  }, [dispatch, resultPrice]);

  return (
    <>
      <section className={styles.basket}>
        <h2 className={styles.basketSubtitle}>{t("Basket")}</h2>
        <div className={styles.basketInner}>
          <div className={styles.basketInnerCards}>
            {basketProducts.map((product, id) => (
              <BasketCard key={id} product={product} />
            ))}
            {!basketProducts.length && (
              <h2
                className={`${styles.basketSubtitle} ${styles.basketSubtitleMt30}`}
              >
                {t("There is nothing in the cart yet")}
              </h2>
            )}
          </div>
          <div className={styles.order}>
            <div className={styles.orderInfo}>
              <p className={styles.orderInfoText}>{t("Total")}</p>
              <p className={styles.orderInfoPrice}>
                {t("${{num}}", {
                  num: priceNumToStr(resultPrice * (lang?.currencyRate || 1)),
                })}
              </p>
            </div>
            <Button onClick={onShowPaymentModal}>{t("Go to checkout")}</Button>
          </div>
        </div>
      </section>
      {createPortal(
        <PaymentModal paymentMethods={paymentMethods} />,
        document.body,
      )}
    </>
  );
};
