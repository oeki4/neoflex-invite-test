import "../assets/scss/components/footer.scss";
import Logo from "./Logo.tsx";
import VK from "./Icons/VK.tsx";
import Telegram from "./Icons/Telegram.tsx";
import Whatsapp from "./Icons/Whatsapp.tsx";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <div className="footer__social-links">
        <NavLink className="footer__social-link" to="/">
          <VK />
        </NavLink>
        <NavLink className="footer__social-link" to="/">
          <Telegram />
        </NavLink>
        <NavLink className="footer__social-link" to="/">
          <Whatsapp />
        </NavLink>
      </div>
    </footer>
  );
}
