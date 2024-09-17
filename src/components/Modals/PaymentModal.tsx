import "../../assets/scss/components/modals/payment.scss";
import { NavLink } from "react-router-dom";
import Cross from "../Icons/Cross.tsx";
import { PaymentMethod } from "../../types/pages/basket.types.ts";

const PaymentModal = ({
  isActive,
  resultPrice,
  toggleIsActive,
  paymentMethods,
  setSelectedPaymentMethod,
  selectedPaymentMethod,
}: {
  isActive: boolean;
  toggleIsActive: () => void;
  resultPrice: number;
  paymentMethods: PaymentMethod[];
  setSelectedPaymentMethod: (method: PaymentMethod) => void;
  selectedPaymentMethod: PaymentMethod | null;
}) => {
  return (
    <>
      {isActive ? (
        <div className="wrapper">
          <div className="payment">
            <button
              onClick={() => toggleIsActive()}
              className="payment__close-btn"
            >
              <Cross />
            </button>

            <h2 className="payment__title">Оплата заказа №223</h2>
            <p className="payment__text">Введите вашу электронную почту</p>
            <input type="text" placeholder="Email" className="payment__input" />
            <p className="payment__text">Способы оплаты</p>
            <ul className="methods">
              {paymentMethods.map((el, index) => (
                <li key={index}>
                  <button
                    onClick={() => setSelectedPaymentMethod(el)}
                    className="methods__item-btn"
                  >
                    <img
                      className={`methods__item-img ${selectedPaymentMethod?.id === el.id ? "methods__item-img--selected" : ""}`}
                      src={el.img}
                      alt={el.name}
                    />
                  </button>
                </li>
              ))}
            </ul>
            <div className="payment__text-between">
              <span className="payment__text">Способ оплаты</span>
              <span className="payment__text">
                {selectedPaymentMethod?.name || "Не выбран"}
              </span>
            </div>
            <div className="payment__text-between">
              <span className="payment__text">К оплате</span>
              <span className="payment__text">₽ {resultPrice}</span>
            </div>
            <NavLink
              to={"/"}
              onClick={() => toggleIsActive()}
              className="payment__submit-btn"
            >
              Перейти к оплате
            </NavLink>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PaymentModal;
