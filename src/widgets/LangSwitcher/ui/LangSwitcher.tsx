import "./lang-switcher.scss";
import { useTranslation } from "react-i18next";
import { useStore } from "@/store/store.ts";
import { observer } from "mobx-react";
import { Lang, languages } from "@/shared/const/languages.ts";
import Language from "@/shared/ui/icons/Language.tsx";

export const LangSwitcher = observer(() => {
  const { i18n } = useTranslation();
  const { userStore } = useStore();
  const setLanguage = async (lang: Lang) => {
    await i18n.changeLanguage(lang.value);
    userStore.setLanguage(lang);
  };
  return (
    <div className="language">
      <Language />
      {languages.map((el) => (
        <button
          onClick={() => setLanguage(el)}
          key={el.value}
          className={`language__btn ${userStore.lang?.value === el.value ? "language__btn--active" : ""}`}
        >
          {el.name}
        </button>
      ))}
    </div>
  );
});
