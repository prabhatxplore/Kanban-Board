import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "../pages/Home";
import DeskLayout from "../layout/DeskLayout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DeskLayout />
  </StrictMode>,
);
