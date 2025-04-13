import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
import Favorite from "@/shared/ui/icons/Favorite.tsx";
import Basket from "@/shared/ui/icons/Basket.tsx";
import Logo from "@/shared/ui/Logo/Logo.tsx";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector/useAppSelector.ts";
import { getBasketProducts } from "@/entities/Basket";

export const Header = () => {
  const basketProducts = useAppSelector(getBasketProducts);
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.headerLinks}>
        <NavLink to={"/basket"} className={styles.headerLink}>
          <Favorite />
          <span className={styles.headerLinkCount}>
            {basketProducts.length}
          </span>
        </NavLink>
        <NavLink to={"/basket"} className={styles.headerLink}>
          <Basket />
          <span className={styles.headerLinkCount}>
            {basketProducts.length}
          </span>
        </NavLink>
      </div>
    </header>
  );
};
