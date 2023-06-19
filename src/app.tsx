/* eslint-disable no-undef */
import React, { useState } from "react";
import {
  handleCurrencyOnBlur,
  handleFloatOnChange,
  handleNoNumberFirstCharOnChange,
  handlePercentageOnBlur,
  handlePostFixedOnFocus,
  handlePreFixedOnFocus,
} from "./adapters/inputFunctions";
import InputComponent from "./components/InputComponent";

const App = () => {
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
    <div className="app-container">
      <InputComponent
        label="Debt Name"
        type="text"
        displayValue={debtName}
        handleOnChange={debtTextBinder}
      />
      <InputComponent
        label="Interest Rate"
        type="text"
        displayValue={debtInterestRate}
        handleOnChange={debtInterestBinder}
        handleOnBlur={debtInterestOnBlurBinder}
        handleOnFocus={debtInterestOnFocusBinder}
      />
      <InputComponent
        label="Payment"
        type="text"
        displayValue={debtPayment}
        handleOnChange={debtPaymentBinder}
        handleOnBlur={debtPaymentOnBlurBinder}
        handleOnFocus={debtPaymentOnFocusBinder}
      />
      <InputComponent
        label="Amount Owed"
        type="text"
        displayValue={debtAmount}
        handleOnChange={debtAmountBinder}
        handleOnBlur={debtAmountOnBlurBinder}
        handleOnFocus={debtAmountOnFocusBinder}
      />
    </div>
  );
};

export default App;
