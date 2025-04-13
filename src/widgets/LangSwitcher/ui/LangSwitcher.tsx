import styles from "./lang-switcher.module.scss";
import { useTranslation } from "react-i18next";
import { Lang, languages } from "@/shared/const/languages.ts";
import Language from "@/shared/ui/icons/Language.tsx";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import { getLang, userSliceActions } from "@/entities/User";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector/useAppSelector.ts";
import { useCallback } from "react";

export const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const lang = useAppSelector(getLang);
  const setLanguage = useCallback(
    async (lang: Lang) => {
      await i18n.changeLanguage(lang.value);
      dispatch(userSliceActions.setLanguage(lang));
    },
    [dispatch, i18n],
  );
  return (
    <div className={styles.language}>
      <Language />
      {languages.map((el) => (
        <button
          onClick={() => setLanguage(el)}
          key={el.value}
          className={`${styles.languageBtn} ${lang?.value === el.value ? styles.languageBtnActive : ""}`}
        >
          {el.name}
        </button>
      ))}
    </div>
  );
};
