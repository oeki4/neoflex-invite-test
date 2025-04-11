import "./header.scss";
import { NavLink } from "react-router-dom";
import { useStore } from "@/store/store.ts";
import { observer } from "mobx-react";
import Favorite from "@/shared/ui/icons/Favorite.tsx";
import Basket from "@/shared/ui/icons/Basket.tsx";
import Logo from "@/shared/ui/Logo/Logo.tsx";

export const Header = observer(() => {
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
