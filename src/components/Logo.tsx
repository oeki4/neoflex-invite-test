import { NavLink } from "react-router-dom";
import "../assets/scss/components/logo.scss";

export default function Logo() {
  return (
    <NavLink className={"logo"} to={"/"}>
      QPICK
    </NavLink>
  );
}
