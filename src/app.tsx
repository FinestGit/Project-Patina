/* eslint-disable no-undef */
import React from "react";
import { useModalContext } from "./contexts/ModalContext";

const App: React.FC = () => {
  const { openModal } = useModalContext();

  return (
    <div className="app-container">
      <button onClick={openModal}>Open</button>
    </div>
  );
};

export default App;
