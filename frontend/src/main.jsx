import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { LoaderProvider } from "./provider/LoaderProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoaderProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </LoaderProvider>
  </BrowserRouter>,
);
