/* eslint-disable no-undef */
import React, { useState } from "react";
import { useModalContext } from "../contexts/ModalContext";
import "../styles/components/debtInputModal.scss";
import InputComponent from "./InputComponent";
import {
  handleCurrencyOnBlur,
  handleFloatOnChange,
  handleNoNumberFirstCharOnChange,
  handlePercentageOnBlur,
  handlePostFixedOnFocus,
  handlePreFixedOnFocus,
} from "../adapters/inputFunctions";

const DebtInputModal: React.FC = (): React.ReactElement => {
  const { isModalOpen, closeModal } = useModalContext();

  const [debtName, setDebtName] = useState<string>("");
  const [debtInterestRate, setDebtInterestRate] = useState<string>("");
  const [debtPayment, setDebtPayment] = useState<string>("");
  const [debtAmount, setDebtAmount] = useState<string>("");

  const debtTextBinder = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleNoNumberFirstCharOnChange(event, setDebtName);

  const debtInterestBinder = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleFloatOnChange(event, setDebtInterestRate);
  const debtInterestOnBlurBinder = () =>
    handlePercentageOnBlur(debtInterestRate, 100, 0, setDebtInterestRate);
  const debtInterestOnFocusBinder = () =>
    handlePostFixedOnFocus(debtInterestRate, "%", setDebtInterestRate);

  const debtPaymentBinder = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleFloatOnChange(event, setDebtPayment);
  const debtPaymentOnBlurBinder = () =>
    handleCurrencyOnBlur(debtPayment, "$", setDebtPayment);
  const debtPaymentOnFocusBinder = () =>
    handlePreFixedOnFocus(debtPayment, "$", setDebtPayment);

  const debtAmountBinder = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleFloatOnChange(event, setDebtAmount);
  const debtAmountOnBlurBinder = () =>
    handleCurrencyOnBlur(debtAmount, "$", setDebtAmount);
  const debtAmountOnFocusBinder = () =>
    handlePreFixedOnFocus(debtAmount, "$", setDebtAmount);
  return (
    <div
      className={`modal-backdrop ${
        isModalOpen ? "modal-open" : "modal-close"
      }`}>
      <div className="modal-content">
        <InputComponent
          label="Debt Name"
          type="text"
          displayValue={debtName}
          placeholderExample="Example Debt Name"
          handleOnChange={debtTextBinder}
        />
        <InputComponent
          label="Interest Rate"
          type="text"
          displayValue={debtInterestRate}
          placeholderExample="15.65%"
          handleOnChange={debtInterestBinder}
          handleOnBlur={debtInterestOnBlurBinder}
          handleOnFocus={debtInterestOnFocusBinder}
        />
        <InputComponent
          label="Payment"
          type="text"
          displayValue={debtPayment}
          placeholderExample="$100.00"
          handleOnChange={debtPaymentBinder}
          handleOnBlur={debtPaymentOnBlurBinder}
          handleOnFocus={debtPaymentOnFocusBinder}
        />
        <InputComponent
          label="Amount Owed"
          type="text"
          displayValue={debtAmount}
          placeholderExample="$1000.00"
          handleOnChange={debtAmountBinder}
          handleOnBlur={debtAmountOnBlurBinder}
          handleOnFocus={debtAmountOnFocusBinder}
        />
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default DebtInputModal;
