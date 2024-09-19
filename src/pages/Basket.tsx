import "../assets/scss/pages/basket.scss";
import BasketCard from "../components/BasketCard.tsx";
import { useStore } from "../store/store.ts";
import { observer } from "mobx-react";
import { useEffect } from "react";
import paymentMethods from "./../mocks/payment-methods.json";
import PaymentModal from "../components/Modals/PaymentModal.tsx";
import Button from "../components/UI/Button.tsx";
import { useTranslation } from "react-i18next";
import { priceNumToStr } from "../helpers/lang.ts";

const Basket = observer(() => {
  const { basketStore, modalsStore, userStore } = useStore();
  const { t } = useTranslation();

  const setBasketItemAmount = (id: number, value: number) => {
    if (value < 1) {
      basketStore.setBasketProducts(
        basketStore.basketProducts.filter((el) => el.id !== id),
      );
      localStorage.setItem(
        "basket",
        JSON.stringify(basketStore.basketProducts),
      );
      return;
    }
    basketStore.setBasketProducts(
      basketStore.basketProducts.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            amount: value,
          };
        }
        return el;
      }),
    );
    localStorage.setItem("basket", JSON.stringify(basketStore.basketProducts));
  };

  useEffect(() => {
    const newPrice = basketStore.basketProducts.reduce(
      (sum, el) =>
        el.priceWithDiscount
          ? sum + el.priceWithDiscount * el.amount
          : sum + el.price * el.amount,
      0,
    );
    basketStore.setResultPrice(newPrice);
  }, [basketStore.basketProducts]);

  const deleteItemFromBasket = (id: number) => {
    basketStore.setBasketProducts(
      basketStore.basketProducts.filter((el) => el.id !== id),
    );
    localStorage.setItem("basket", JSON.stringify(basketStore.basketProducts));
  };

  return (
    <>
      <section className="basket">
        <h2 className="basket__subtitle">{t("Basket")}</h2>
        <div className="basket__inner">
          <div className="basket__inner-cards">
            {basketStore.basketProducts.map((product, id) => (
              <BasketCard
                setBasketItemAmount={setBasketItemAmount}
                deleteItemFromBasket={deleteItemFromBasket}
                key={id}
                product={product}
                currencyRate={userStore.lang?.currencyRate || 1}
              />
            ))}
          </div>
          <div className="order">
            <div className="order__info">
              <p className="order__info-text">{t("Total")}</p>
              <p className="order__info-price">
                {t("${{num}}", {
                  num: priceNumToStr(
                    basketStore.resultPrice *
                      (userStore.lang?.currencyRate || 1),
                  ),
                })}
              </p>
            </div>
            <Button onClick={modalsStore.togglePaymentModal}>
              {t("Go to checkout")}
            </Button>
          </div>
        </div>
      </section>
      <PaymentModal
        toggleIsActive={modalsStore.togglePaymentModal}
        isActive={modalsStore.paymentModalActive}
        resultPrice={basketStore.resultPrice}
        paymentMethods={paymentMethods}
        setSelectedPaymentMethod={modalsStore.setSelectedPaymentMethod}
        selectedPaymentMethod={modalsStore.selectedPaymentMethod}
        currencyRate={userStore.lang?.currencyRate || 1}
      />
    </>
  );
});

export default Basket;
