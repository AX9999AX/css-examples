import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import VisitedExample from "./visited/VisitedExample.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VisitedExample />
  </StrictMode>
);
