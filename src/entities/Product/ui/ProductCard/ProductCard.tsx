import "./product-card.scss";
import Star from "@/shared/ui/icons/Star.tsx";
import Eye from "@/shared/ui/icons/Eye.tsx";
import { useTranslation } from "react-i18next";
import {priceNumToStr} from "@/shared/lib/priceNumToStr.ts";
import {Product} from "@/types/pages/catalog.types.ts";

interface ProductCardProps {
	product: Product;
	toggleProductModal: (product: Product | null) => void;
	addToBasket: (product: Product) => void;
	currencyRate: number;
}

export const ProductCard = ({
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
