/* eslint-disable unicorn/prefer-query-selector */
/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import "./styles/index.scss";
import { ModalProvider } from "./contexts/ModalContext.tsx";
import DebtInputModal from "./components/DebtInputModal.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider modalContent={<DebtInputModal />}>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
