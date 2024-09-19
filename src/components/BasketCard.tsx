import "../assets/scss/components/basket-card.scss";
import Trash from "./Icons/Trash.tsx";
import WhiteTrash from "./Icons/WhiteTrash.tsx";
import { priceNumToStr } from "../helpers/lang.ts";
import { useTranslation } from "react-i18next";
import { BasketCardProps } from "../types/components.types.ts";

const BasketCard = ({
  product,
  setBasketItemAmount,
  deleteItemFromBasket,
  currencyRate,
}: BasketCardProps) => {
  const { t } = useTranslation();
  return (
    <div className="card">
      <div className="card__info">
        <div className="card__img">
          <img
            className="card__img-inner"
            src={`/img/products/${product.photo}`}
            alt="photo"
          />
        </div>
        <div className="card__desc">
          <p className="card__desc-name">{product.title}</p>
          <p className="price">
            {product.priceWithDiscount
              ? t("${{num}}", {
                  num: priceNumToStr(product?.priceWithDiscount * currencyRate),
                })
              : t("${{num}}", {
                  num: priceNumToStr(product?.price * currencyRate),
                })}
            {product.priceWithDiscount ? (
              <span className="discount">
                {t("${{num}}", {
                  num: priceNumToStr(product?.price * currencyRate),
                })}
              </span>
            ) : (
              ""
            )}
          </p>
        </div>
        <div className="card__switch-price">
          <div className="switch">
            <button
              onClick={() =>
                setBasketItemAmount(product.id, product.amount - 1)
              }
              className="switch__btn"
            >
              &#8211;
            </button>
            <span className="switch__value">{product.amount}</span>
            <button
              onClick={() =>
                setBasketItemAmount(product.id, product.amount + 1)
              }
              className="switch__btn"
            >
              +
            </button>
          </div>
          <p className="price price--result">
            {product.priceWithDiscount
              ? t("${{num}}", {
                  num: priceNumToStr(
                    product.priceWithDiscount * product.amount * currencyRate,
                  ),
                })
              : t("${{num}}", {
                  num: priceNumToStr(
                    product.price * product.amount * currencyRate,
                  ),
                })}
            {product.priceWithDiscount ? (
              <span className="discount discount--result">
                {t("${{num}}", {
                  num: priceNumToStr(
                    product.price * product.amount * currencyRate,
                  ),
                })}
              </span>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
      <button
        onClick={() => deleteItemFromBasket(product.id)}
        className="card__delete"
      >
        <WhiteTrash />
      </button>
      <span
        onClick={() => deleteItemFromBasket(product.id)}
        className="card__trash"
      >
        <Trash />
      </span>
    </div>
  );
};

export default BasketCard;
