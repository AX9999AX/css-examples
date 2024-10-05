import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ActiveExample from "./active/ActiveExample.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ActiveExample />
  </StrictMode>
);
