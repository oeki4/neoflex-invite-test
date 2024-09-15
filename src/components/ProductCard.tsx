import "../assets/scss/components/product-card.scss";
import { NavLink } from "react-router-dom";
import Star from "./Icons/Star.tsx";

const ProductCard = ({
  product,
  addToBasket,
}: {
  product: {
    id: number;
    title: string;
    photo: string;
    rate: number;
    price: number;
    priceWithDiscount: number | null;
  };
  addToBasket: (product: {
    id: number;
    title: string;
    photo: string;
    rate: number;
    price: number;
    priceWithDiscount: number | null;
  }) => void;
}) => {
  return (
    <NavLink to="/" className="product-card">
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
          Купить
        </button>
      </div>
    </NavLink>
  );
};

export default ProductCard;
