import React, { useContext, useState } from "react";

interface ModalContextProperties {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

interface ModalProviderProperties {
  children?: React.ReactNode;
  modalContent: React.ReactElement;
}

const ModalContext = React.createContext<ModalContextProperties | undefined>(
  undefined
);

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};

const ModalProvider: React.FC<ModalProviderProperties> = ({
  children,
  modalContent,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      <div>{children}</div>
      {isModalOpen && React.cloneElement(modalContent, { closeModal })}
    </ModalContext.Provider>
  );
};

export { useModalContext, ModalProvider };
