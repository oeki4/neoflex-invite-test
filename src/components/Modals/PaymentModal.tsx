import "../../assets/scss/components/modals/payment.scss";
import { NavLink } from "react-router-dom";
import Cross from "../Icons/Cross.tsx";

const PaymentModal = ({
  isActive,
  resultPrice,
  toggleIsActive,
}: {
  isActive: boolean;
  toggleIsActive: () => void;
  resultPrice: number;
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
              <li>
                <button className="methods__item-btn">
                  <img
                    className="methods__item-img"
                    src="/img/payment-methods/sberbank.png"
                    alt=""
                  />
                </button>
              </li>
              <li>
                <button className="methods__item-btn">
                  <img
                    className="methods__item-img"
                    src="/img/payment-methods/tbank.png"
                    alt=""
                  />
                </button>
              </li>
              <li>
                <button className="methods__item-btn">
                  <img
                    className="methods__item-img"
                    src="/img/payment-methods/raiffeisen.png"
                    alt=""
                  />
                </button>
              </li>
              <li>
                <button className="methods__item-btn">
                  <img
                    className="methods__item-img"
                    src="/img/payment-methods/alfabank.png"
                    alt=""
                  />
                </button>
              </li>
              <li>
                <button className="methods__item-btn">
                  <img
                    className="methods__item-img"
                    src="/img/payment-methods/yoomoney.png"
                    alt=""
                  />
                </button>
              </li>
            </ul>
            <div className="payment__text-between">
              <span className="payment__text">Способ оплаты</span>
              <span className="payment__text">Сбербанк</span>
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
