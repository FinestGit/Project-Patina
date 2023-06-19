/* eslint-disable no-undef */
import React from "react";
import { useModalContext } from "./contexts/ModalContext";
import "./styles/app.scss";

const App: React.FC = () => {
  const { openModal } = useModalContext();

  return (
    <div className="app-container">
      <button className="button" onClick={openModal}>
        Create New Debt
      </button>
    </div>
  );
};

export default App;
