import styles from "./payment-modal.module.scss";
import Cross from "@/shared/ui/icons/Cross.tsx";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { PaymentMethod } from "../../model/types/paymentMethod.ts";
import { priceNumToStr } from "@/shared/lib/priceNumToStr.ts";
import Button from "@/shared/ui/Button/Button.tsx";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import { useCallback } from "react";
import { basketPageSliceActions } from "@/pages/BasketPage";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector/useAppSelector.ts";
import { getResultPrice } from "@/entities/Basket";
import { getSelectedPaymentMethod } from "@/pages/BasketPage/model/selectors/selectedPaymentMethodSelector.ts";
import { getLang } from "@/entities/User";

type FormInputs = {
  email: string;
};

export interface PaymentModalProps {
  paymentMethods: PaymentMethod[];
}

const PaymentModal = ({ paymentMethods }: PaymentModalProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const resultPrice = useAppSelector(getResultPrice);
  const selectedPaymentMethod = useAppSelector(getSelectedPaymentMethod);
  const lang = useAppSelector(getLang);

  const onHidePaymentModal = useCallback(() => {
    dispatch(basketPageSliceActions.hidePaymentModal());
  }, [dispatch]);

  const onSelectPaymentMethod = useCallback(
    (paymentMethod: PaymentMethod) => {
      dispatch(basketPageSliceActions.setSelectedPaymentMethod(paymentMethod));
    },
    [dispatch],
  );

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
    <div onClick={onHidePaymentModal} className={styles.wrapper}>
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}
        className={styles.payment}
      >
        <button onClick={onHidePaymentModal} className={styles.paymentCloseBtn}>
          <Cross />
        </button>

        <h2 className={styles.paymentTitle}>
          {t("Order №{{num}}", {
            num: 223,
          })}
        </h2>
        <p className={styles.paymentText}>{t("Enter your email")}</p>
        <input
          type="text"
          {...register("email")}
          onInput={() => trigger("email")}
          placeholder="Email"
          className={`${styles.paymentInput} ${errors.email ? styles.paymentInputError : ""}`}
        />
        {errors.email?.message && (
          <p className={styles.paymentError}>{errors.email?.message}</p>
        )}
        <p className={styles.paymentText}>{t("Payment methods")}</p>
        <ul className={styles.paymentMethods}>
          {paymentMethods.map((el, index) => (
            <li key={index}>
              <button
                onClick={() => onSelectPaymentMethod(el)}
                className={styles.methodsItemBtn}
              >
                <img
                  className={`${styles.methodsItemImg} ${selectedPaymentMethod?.id === el.id ? styles.methodsItemImgSelected : ""}`}
                  src={el.img}
                  alt={el.name}
                />
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.paymentTextBetween}>
          <span className={styles.paymentText}>{t("Payment method")}</span>
          <span className={styles.paymentText}>
            {selectedPaymentMethod?.name || t("Not selected")}
          </span>
        </div>
        <div className={styles.paymentTextBetween}>
          <span className={styles.paymentText}>{t("For payment")}</span>
          <span className={styles.paymentText}>
            {t("${{num}}", {
              num: priceNumToStr(resultPrice * lang.currencyRate),
            })}
          </span>
        </div>
        <div className={styles.paymentBtnWrapper}>
          <Button
            disabled={!!errors?.email || !selectedPaymentMethod?.id}
            submit
            onClick={onHidePaymentModal}
          >
            {t("Proceed to payment")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentModal;
