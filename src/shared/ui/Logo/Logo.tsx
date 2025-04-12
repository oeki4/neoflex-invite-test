import { NavLink } from "react-router-dom";
import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <NavLink className={styles.logo} to={"/"}>
      QPICK
    </NavLink>
  );
};

export default Logo;
