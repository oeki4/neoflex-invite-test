import "../assets/scss/components/product-card.scss";
import Star from "./Icons/Star.tsx";

const ProductCard = ({
  product,
  addToBasket,
  toggleProductModal,
}: {
  product: {
    id: number;
    title: string;
    photo: string;
    rate: number;
    price: number;
    priceWithDiscount: number | null;
  };
  toggleProductModal: () => void;
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
    <div onClick={() => toggleProductModal()} className="product-card">
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
    </div>
  );
};

export default ProductCard;
