import "../assets/scss/components/basket-card.scss";
import Trash from "./Icons/Trash.tsx";
import WhiteTrash from "./Icons/WhiteTrash.tsx";

export default function BasketCard() {
  return (
    <div className="card">
      <div className="card__info">
        <div className="card__img">
          <img
            className="card__img-inner"
            src="https://i.imgur.com/Fpm86L9.png"
            alt="photo"
          />
        </div>
        <div className="card__desc">
          <p className="card__desc-name">Apple BYZ S852I</p>
          <p className="price">2 927 ₽</p>
        </div>
        <div className="card__switch-price">
          <div className="switch">
            <button className="switch__btn">&#8211;</button>
            <span className="switch__value">1</span>
            <button className="switch__btn">+</button>
          </div>
          <p className="price price--result">2 927 ₽</p>
        </div>
      </div>
      <button className="card__delete">
        <WhiteTrash />
      </button>
      <span className="card__trash">
        <Trash />
      </span>
    </div>
  );
}
