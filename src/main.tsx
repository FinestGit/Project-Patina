/* eslint-disable unicorn/prefer-query-selector */
/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import "./styles/index.scss";
import { ModalProvider } from "./contexts/ModalContext.tsx";
import DebtInputModal from "./components/DebtInputModal.tsx";
import { DebtMapProvider } from "./contexts/DebtMapContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DebtMapProvider>
      <ModalProvider modalContent={<DebtInputModal />}>
        <App />
      </ModalProvider>
    </DebtMapProvider>
  </React.StrictMode>
);
