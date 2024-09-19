import "../../assets/scss/components/modals/payment.scss";
import Cross from "../Icons/Cross.tsx";
import { PaymentMethod } from "../../types/pages/basket.types.ts";
import Button from "../UI/Button.tsx";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const validationSchema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email(t("Invalid email address"))
        .required(t("This field is required")),
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

            <h2 className="payment__title">
              {t("Order №{{num}}", {
                num: 223,
              })}
            </h2>
            <p className="payment__text">{t("Enter your email")}</p>
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
            <p className="payment__text">{t("Payment methods")}</p>
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
              <span className="payment__text">{t("Payment method")}</span>
              <span className="payment__text">
                {selectedPaymentMethod?.name || t("Not selected")}
              </span>
            </div>
            <div className="payment__text-between">
              <span className="payment__text">{t("For payment")}</span>
              <span className="payment__text">₽ {resultPrice}</span>
            </div>
            <div className="payment__btn-wrapper">
              <Button
                disabled={!!errors?.email || !selectedPaymentMethod?.id}
                submit
                onClick={toggleIsActive}
              >
                {t("Proceed to payment")}
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
