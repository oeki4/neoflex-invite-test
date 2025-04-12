import styles from "./footer.module.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "@/widgets/LangSwitcher";
import Logo from "@/shared/ui/Logo/Logo.tsx";
import Telegram from "@/shared/ui/icons/Telegram.tsx";
import Whatsapp from "@/shared/ui/icons/Whatsapp.tsx";
import VK from "@/shared/ui/icons/VK.tsx";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <Logo />
      <div className={styles.footerLinks}>
        <ul className={styles.footerLinksList}>
          <li className={styles.footerLinksItem}>
            <NavLink className={styles.footerLinksLink} to={"/basket"}>
              {t("Favorites")}
            </NavLink>
          </li>
          <li className={styles.footerLinksItem}>
            <NavLink className={styles.footerLinksLink} to={"/basket"}>
              {t("Basket")}
            </NavLink>
          </li>
          <li className={styles.footerLinksItem}>
            <a
              target={"_blank"}
              className={styles.footerLinksLink}
              href={"https://oeki.ru"}
            >
              {t("Contacts")}
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footerServiceLang}>
        <ul className={styles.footerLinksList}>
          <li className={styles.footerLinksItem}>
            <a
              className={styles.footerLinksLink}
              target={"_blank"}
              href={"https://oeki.ru"}
            >
              {t("Terms of service")}
            </a>
          </li>
        </ul>
        <LangSwitcher />
      </div>
      <div className={styles.footerSocialLinks}>
        <a
          target={"_blank"}
          className={styles.footerSocialLink}
          href={"https://vk.com/neoflex_ru"}
        >
          <VK />
        </a>
        <a
          target={"_blank"}
          className={styles.footerSocialLink}
          href={"https://t.me/oeki4"}
        >
          <Telegram />
        </a>
        <a
          target={"_blank"}
          className={styles.footerSocialLink}
          href="tel:74959842513"
        >
          <Whatsapp />
        </a>
      </div>
    </footer>
  );
};
