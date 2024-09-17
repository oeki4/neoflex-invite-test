import "../../assets/scss/components/modals/product.scss";
import Star from "../Icons/Star.tsx";
import Cross from "../Icons/Cross.tsx";

const ProductModal = ({
  isActive,
  toggleIsActive,
}: {
  isActive: boolean;
  toggleIsActive: () => void;
}) => {
  return (
    <>
      {isActive ? (
        <div className="wrapper">
          <div className="product">
            <button
              onClick={() => toggleIsActive()}
              className="product__close-btn"
            >
              <Cross />
            </button>
            <div className="product__photo-info">
              <div className="product__photo">
                <img src="/img/products/1.png" alt="" />
              </div>
              <div className="product__info">
                <h2 className="product__title">Apple BYZ S852I</h2>
                <div className="product__rate-price">
                  <div className="product__rate">
                    <Star />
                    <p className="product__rate-value">{4.7}</p>
                  </div>
                  <p className="product__price">
                    {2997} ₽<span className="product__discount">{3556} ₽</span>
                  </p>
                </div>
                <button className="product__buy-btn">В корзину</button>
              </div>
            </div>
            <h3 className="product__title product__title--mb10">Описание</h3>
            <p className="product__text product__text--wrap product__text--mb10">
              BYZ S852 - проводное аудиоустройство, благодаря которому можно
              прослушивать любимую музыку, не мешая окружающим.
            </p>
            <h3 className="product__title product__title--mb10">
              Характеристики
            </h3>
            <ul className="characteristics">
              <li className="characteristics__item">
                <p className="product__text">Бренд</p>
                <div className="characteristics__line"></div>
                <p className="product__text">BYZ</p>
              </li>
              <li className="characteristics__item">
                <p className="product__text">Тип</p>
                <div className="characteristics__line"></div>
                <p className="product__text">Проводные наушники</p>
              </li>
              <li className="characteristics__item">
                <p className="product__text">Конструкция</p>
                <div className="characteristics__line"></div>
                <p className="product__text">Проводные</p>
              </li>
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
