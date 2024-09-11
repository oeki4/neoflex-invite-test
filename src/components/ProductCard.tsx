import "../assets/scss/components/product-card.scss";
import { NavLink } from "react-router-dom";
import Star from "./Icons/Star.tsx";

export default function ProductCard() {
  return (
    <NavLink to="/" className="product-card">
      <div className="product-card__img-wrapper">
        <img
          src="https://i.imgur.com/Fpm86L9.png"
          alt=""
          className="product-card__img"
        />
      </div>
      <div className="product-card__info">
        <p className="product-card__name">Apple BYZ S852I</p>
        <p className="product-card__price">
          2927 ₽<span className="product-card__discount">3527 ₽</span>
        </p>
        <div className="product-card__rate-wrapper">
          <Star />
          <p className="product-card__rate">4.7</p>
        </div>
        <button className="product-card__buy-btn">Купить</button>
      </div>
    </NavLink>
  );
}
