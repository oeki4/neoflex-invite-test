import "../assets/scss/components/footer.scss";
import "../assets/scss/components/logo.scss";
import Logo from "./Logo.tsx";
import VK from "./Icons/VK.tsx";
import Telegram from "./Icons/Telegram.tsx";
import Whatsapp from "./Icons/Whatsapp.tsx";
import { NavLink } from "react-router-dom";
import LangSwitch from "./LangSwitch.tsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo--footer">
        <Logo />
      </div>
      <div className="footer__links">
        <ul className="footer__links-list">
          <li className="footer__links-item">
            <NavLink className="footer__links-link" to="/">
              Избранное
            </NavLink>
          </li>
          <li className="footer__links-item">
            <NavLink className="footer__links-link" to="/">
              Корзина
            </NavLink>
          </li>
          <li className="footer__links-item">
            <NavLink className="footer__links-link" to="/">
              Контакты
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="footer__service-lang">
        <ul className="footer__links-list">
          <li className="footer__links-item">
            <NavLink className="footer__links-link" to="/">
              Условия сервиса
            </NavLink>
          </li>
        </ul>
        <LangSwitch />
      </div>
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
