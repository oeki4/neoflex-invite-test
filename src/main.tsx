import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/app/assets/styles/global.scss";
import {BrowserRouter} from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import RU from "./lang/ru.json";
import App from "@/app/App.tsx";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: RU,
    },
  },
  lng: "ru",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
  </StrictMode>,
);
