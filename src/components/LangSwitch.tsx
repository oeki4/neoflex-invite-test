import "../assets/scss/components/lang-switch.scss";
import Language from "./Icons/Language.tsx";
import { languages } from "../helpers/lang.ts";
import { useTranslation } from "react-i18next";
import { useStore } from "../store/store.ts";
import { Lang } from "../types/helpers/lang.types.ts";
import { observer } from "mobx-react";

const LangSwitch = observer(() => {
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
          className={`language__btn ${userStore.lang?.value === el.value ? "language__btn--active" : ""}`}
        >
          {el.name}
        </button>
      ))}
    </div>
  );
});

export default LangSwitch;
