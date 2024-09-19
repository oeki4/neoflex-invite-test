import "../assets/scss/components/product-card.scss";
import Star from "./Icons/Star.tsx";
import Eye from "./Icons/Eye.tsx";
import { Product } from "../types/pages/catalog.types.ts";
import { useTranslation } from "react-i18next";

const ProductCard = ({
  product,
  addToBasket,
  toggleProductModal,
}: {
  product: Product;
  toggleProductModal: (product: Product | null) => void;
  addToBasket: (product: Product) => void;
}) => {
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
            {product.priceWithDiscount} ₽
            <span className="product-card__discount">{product.price} ₽</span>
          </p>
        ) : (
          <p className="product-card__price">{product.price} ₽</p>
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
