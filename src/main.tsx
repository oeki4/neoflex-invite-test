import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/app/assets/styles/global.scss";
import { BrowserRouter } from "react-router-dom";
import "@/shared/config/i18n/i18n.ts";
import App from "@/app/App.tsx";
import { StoreProvider } from "@/app/providers/StoreProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
);
