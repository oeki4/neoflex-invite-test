import "../assets/scss/components/basket-card.scss";
import Trash from "./Icons/Trash.tsx";
import WhiteTrash from "./Icons/WhiteTrash.tsx";

export default function BasketCard({
  product,
  setBasketItemAmount,
  deleteItemFromBasket,
}: {
  product: {
    id: number;
    title: string;
    photo: string;
    rate: number;
    price: number;
    priceWithDiscount: number | null;
    amount: number;
  };
  setBasketItemAmount: (id: number, value: number) => void;
  deleteItemFromBasket: (id: number) => void;
}) {
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
              ? product.priceWithDiscount
              : product.price}{" "}
            ₽
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
              ? product.priceWithDiscount
              : product.price}{" "}
            ₽
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
}
