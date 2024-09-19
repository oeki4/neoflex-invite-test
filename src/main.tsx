import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/scss/main.scss";
import "./assets/scss/global.scss";
import { RouterProvider } from "react-router-dom";
import routes from "./router/routes.ts";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import RU from "./lang/ru.json";

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
    <RouterProvider router={routes} />
  </StrictMode>,
);
