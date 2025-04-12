import "./basket-page.scss";
import BasketCard from "@/entities/Basket/ui/BasketCard/BasketCard.tsx";
import { useStore } from "@/store/store.ts";
import { observer } from "mobx-react";
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
import {
  basketPageSliceActions,
  getPaymentModalActive,
} from "@/pages/BasketPage";
import { createPortal } from "react-dom";

export const BasketPage = observer(() => {
  const { userStore } = useStore();
  const basketProducts = useAppSelector(getBasketProducts);
  const paymentModalActive = useAppSelector(getPaymentModalActive);
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
    dispatch(basketPageSliceActions.showPaymentModal());
  }, [dispatch]);

  return (
    <>
      <section className="basket">
        <h2 className="basket__subtitle">{t("Basket")}</h2>
        <div className="basket__inner">
          <div className="basket__inner-cards">
            {basketProducts.map((product, id) => (
              <BasketCard
                key={id}
                product={product}
                currencyRate={userStore.lang?.currencyRate || 1}
              />
            ))}
            {!basketProducts.length && (
              <h2 className="basket__subtitle basket__subtitle--mt30">
                {t("There is nothing in the cart yet")}
              </h2>
            )}
          </div>
          <div className="order">
            <div className="order__info">
              <p className="order__info-text">{t("Total")}</p>
              <p className="order__info-price">
                {t("${{num}}", {
                  num: priceNumToStr(
                    resultPrice * (userStore.lang?.currencyRate || 1),
                  ),
                })}
              </p>
            </div>
            <Button onClick={onShowPaymentModal}>{t("Go to checkout")}</Button>
          </div>
        </div>
      </section>
      {paymentModalActive &&
        createPortal(
          <PaymentModal
            paymentMethods={paymentMethods}
            currencyRate={userStore.lang?.currencyRate || 1}
          />,
          document.body,
        )}
    </>
  );
});
