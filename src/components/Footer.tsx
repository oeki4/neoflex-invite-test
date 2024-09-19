import "../assets/scss/components/footer.scss";
import "../assets/scss/components/logo.scss";
import Logo from "./Logo.tsx";
import VK from "./Icons/VK.tsx";
import Telegram from "./Icons/Telegram.tsx";
import Whatsapp from "./Icons/Whatsapp.tsx";
import { NavLink } from "react-router-dom";
import LangSwitch from "./LangSwitch.tsx";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="logo--footer">
        <Logo />
      </div>
      <div className="footer__links">
        <ul className="footer__links-list">
          <li className="footer__links-item">
            <NavLink className="footer__links-link" to={"/basket"}>
              {t("Favorites")}
            </NavLink>
          </li>
          <li className="footer__links-item">
            <NavLink className="footer__links-link" to={"/basket"}>
              {t("Basket")}
            </NavLink>
          </li>
          <li className="footer__links-item">
            <a
              target={"_blank"}
              className="footer__links-link"
              href={"https://oeki.ru"}
            >
              {t("Contacts")}
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__service-lang">
        <ul className="footer__links-list">
          <li className="footer__links-item">
            <a
              className="footer__links-link"
              target={"_blank"}
              href={"https://oeki.ru"}
            >
              {t("Terms of service")}
            </a>
          </li>
        </ul>
        <LangSwitch />
      </div>
      <div className="footer__social-links">
        <a
          target={"_blank"}
          className="footer__social-link"
          href={"https://vk.com/neoflex_ru"}
        >
          <VK />
        </a>
        <a
          target={"_blank"}
          className="footer__social-link"
          href={"https://t.me/oeki4"}
        >
          <Telegram />
        </a>
        <a
          target={"_blank"}
          className="footer__social-link"
          href="tel:74959842513"
        >
          <Whatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
