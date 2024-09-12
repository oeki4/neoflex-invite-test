import "../assets/scss/components/lang-switch.scss";
import Language from "./Icons/Language.tsx";

export default function LangSwitch() {
  return (
    <div className="language">
      <Language />
      <button className="language__btn language__btn--active">Рус</button>
      <button className="language__btn">Eng</button>
    </div>
  );
}
