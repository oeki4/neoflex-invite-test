import "../assets/scss/components/product-card.scss";
import Star from "./Icons/Star.tsx";
import Eye from "./Icons/Eye.tsx";
import { useTranslation } from "react-i18next";
import { priceNumToStr } from "../helpers/lang.ts";
import { ProductCardProps } from "../types/components.types.ts";

const ProductCard = ({
  product,
  addToBasket,
  toggleProductModal,
  currencyRate,
}: ProductCardProps) => {
  const { t } = useTranslation();
  return (
    <div className="product-card">
      <span
        onClick={() => toggleProductModal(product)}
        className="product-card__more-btn"
      >
        <Eye />
      </span>
      <div className="product-card__img-wrapper">
        <img
          src={`/img/products/${product.photo}`}
          alt=""
          className="product-card__img"
        />
      </div>
      <div className="product-card__info">
        <p className="product-card__name">{product.title}</p>
        {product.priceWithDiscount ? (
          <p className="product-card__price">
            {t("${{num}}", {
              num: priceNumToStr(product.priceWithDiscount * currencyRate),
            })}
            <span className="product-card__discount">
              {t("${{num}}", {
                num: priceNumToStr(product.price * currencyRate),
              })}
            </span>
          </p>
        ) : (
          <p className="product-card__price">
            {t("${{num}}", {
              num: priceNumToStr(product.price * currencyRate),
            })}
          </p>
        )}
        <div className="product-card__rate-wrapper">
          <Star />
          <p className="product-card__rate">{product.rate}</p>
        </div>
        <button
          onClick={() => addToBasket(product)}
          className="product-card__buy-btn"
        >
          {t("Buy")}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
