import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/scss/main.scss";
import "./assets/scss/global.scss";
import { RouterProvider } from "react-router-dom";
import routes from "./router/routes.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
