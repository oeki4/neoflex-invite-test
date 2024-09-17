import { NavLink } from "react-router-dom";
import "../assets/scss/components/logo.scss";

const Logo = () => {
  return (
    <NavLink className="logo" to={"/"}>
      QPICK
    </NavLink>
  );
};

export default Logo;
