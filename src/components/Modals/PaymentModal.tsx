import "../../assets/scss/components/modals/payment.scss";
import Cross from "../Icons/Cross.tsx";
import { PaymentMethod } from "../../types/pages/basket.types.ts";
import Button from "../UI/Button.tsx";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormInputs = {
  email: string;
};

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
  const validationSchema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email("Некорректный email")
        .required("Поле обязательно для ввода"),
    })
    .required();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => console.log("Submitted!");

  return (
    <>
      {isActive ? (
        <div className="wrapper">
          <form onSubmit={handleSubmit(onSubmit)} className="payment">
            <button
              onClick={() => toggleIsActive()}
              className="payment__close-btn"
            >
              <Cross />
            </button>

            <h2 className="payment__title">Оплата заказа №223</h2>
            <p className="payment__text">Введите вашу электронную почту</p>
            <input
              type="text"
              {...register("email")}
              onInput={() => trigger("email")}
              placeholder="Email"
              className={`payment__input ${errors.email ? "payment__input--error" : ""}`}
            />
            {errors.email?.message ? (
              <p className="payment__error">{errors.email?.message}</p>
            ) : (
              <></>
            )}
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
            <div className="payment__btn-wrapper">
              <Button
                disabled={!!errors?.email || !selectedPaymentMethod?.id}
                submit
                onClick={toggleIsActive}
              >
                Перейти к оплате
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PaymentModal;
