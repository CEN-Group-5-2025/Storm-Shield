import "../global.css";
import "../styleguide.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPage } from "./screens/LandingPage/LandingPage.tsx";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
);
