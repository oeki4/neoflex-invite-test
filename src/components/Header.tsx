import Logo from "./Logo.tsx";
import "../assets/scss/components/header.scss";
import Favorite from "./Icons/Favorite.tsx";
import Basket from "./Icons/Basket.tsx";
import { NavLink } from "react-router-dom";
import { useStore } from "../store/store.ts";
import { observer } from "mobx-react";

const Header = observer(() => {
  const { basketStore } = useStore();
  return (
    <header className="header">
      <Logo />
      <div className="header__links">
        <NavLink to={"/basket"} className="header__link">
          <Favorite />
          <span className="header__link-count">
            {basketStore.basketProducts.length}
          </span>
        </NavLink>
        <NavLink to={"/basket"} className="header__link">
          <Basket />
          <span className="header__link-count">
            {basketStore.basketProducts.length}
          </span>
        </NavLink>
      </div>
    </header>
  );
});

export default Header;
