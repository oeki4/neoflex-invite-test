import "../assets/scss/components/basket-card.scss";
import Trash from "./Icons/Trash.tsx";

export default function BasketCard() {
  return (
    <div className="card">
      <div className="card__info">
        <img
          className="card__info-img"
          src="https://i.imgur.com/Fpm86L9.png"
          alt="photo"
        />
        <div className="card__desc">
          <p className="card__desc-name">Apple BYZ S852I</p>
          <p className="price">2 927 ₽</p>
        </div>
        <div className="switch">
          <button className="switch__btn">&#8211;</button>
          <span className="switch__value">1</span>
          <button className="switch__btn">+</button>
        </div>
      </div>
      <div className="card__result">
        <span>
          <Trash />
        </span>
        <p className="price price--result">2 927 ₽</p>
      </div>
    </div>
  );
}
