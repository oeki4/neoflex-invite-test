import styles from "./not-found-page.module.scss";
import { NavLink } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <div>
        <h3 className={styles.title}>Страница не найдена</h3>
        <NavLink to={"/"} className={styles.link}>
          На главную
        </NavLink>
      </div>
    </div>
  );
};
