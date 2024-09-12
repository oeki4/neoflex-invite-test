import Logo from "./Logo.tsx";
import "../assets/scss/components/header.scss";
import Favorite from "./Icons/Favorite.tsx";
import Basket from "./Icons/Basket.tsx";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <div className="header__links">
        <NavLink to="/" className="header__link">
          <Favorite />
          <span className="header__link-count">1</span>
        </NavLink>
        <NavLink to="/" className="header__link">
          <Basket />
          <span className="header__link-count">10</span>
        </NavLink>
      </div>
    </header>
  );
}
