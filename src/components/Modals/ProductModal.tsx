import "../../assets/scss/components/modals/product.scss";
import Star from "../Icons/Star.tsx";
import Cross from "../Icons/Cross.tsx";
import { Product } from "../../types/pages/catalog.types.ts";
import Button from "../UI/Button.tsx";

const ProductModal = ({
  isActive,
  toggleIsActive,
  product,
  addToBasket,
}: {
  isActive: boolean;
  toggleIsActive: (product: Product | null) => void;
  product: Product | null;
  addToBasket: (product: Product | null) => void;
}) => {
  return (
    <>
      {isActive ? (
        <div className="wrapper">
          <div className="product">
            <button
              onClick={() => toggleIsActive(null)}
              className="product__close-btn"
            >
              <Cross />
            </button>
            <div className="product__photo-info">
              <div className="product__photo">
                <img src={`/img/products/${product?.photo}`} alt="" />
              </div>
              <div className="product__info">
                <h2 className="product__title">{product?.title}</h2>
                <div className="product__rate-price">
                  <div className="product__rate">
                    <Star />
                    <p className="product__rate-value">{product?.rate}</p>
                  </div>
                  {product?.priceWithDiscount ? (
                    <p className="product__price">
                      {product?.priceWithDiscount} ₽
                      <span className="product__discount">
                        {product?.price} ₽
                      </span>
                    </p>
                  ) : (
                    <p className="product__price">{product?.price} ₽</p>
                  )}
                </div>
                <Button onClick={() => addToBasket(product)}>В корзину</Button>
              </div>
            </div>
            <h3 className="product__title product__title--mb10">Описание</h3>
            <p className="product__text product__text--wrap product__text--mb10">
              {product?.description}
            </p>
            <h3 className="product__title product__title--mb10">
              Характеристики
            </h3>
            <ul className="characteristics">
              {product?.characteristics ? (
                product?.characteristics.map((item, index) => (
                  <li key={index} className="characteristics__item">
                    <p className="product__text product__text--name">
                      {item.name}
                    </p>
                    <div className="characteristics__line"></div>
                    <p className="product__text product__text--value">
                      {item.value}
                    </p>
                  </li>
                ))
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductModal;
