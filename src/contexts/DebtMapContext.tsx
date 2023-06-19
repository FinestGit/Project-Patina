import React, { createContext, useContext, useState } from "react";
import {
  DebtMapConvertFailureType,
  DebtMapPreConvertType,
  DebtMapType,
} from "../models/types/DebtMapType";

interface DebtMapContextProperties {
  debtMapList: DebtMapType[];
  // eslint-disable-next-line no-unused-vars
  addToDebtMapList: (newElement: DebtMapPreConvertType) => AddToDebtMapReturn;
}

interface DebtMapProviderProperties {
  children?: React.ReactNode;
}

interface AddToDebtMapReturn {
  success: boolean;
  failedObject: DebtMapConvertFailureType;
}

const DebtMapContext = createContext<DebtMapContextProperties | undefined>(
  undefined
);

const useDebtMapContext = () => {
  const context = useContext(DebtMapContext);
  if (!context) {
    throw new Error("useDebtMapContext must be within a DebtMapProvider");
  }
  return context;
};

const DebtMapProvider: React.FC<DebtMapProviderProperties> = ({ children }) => {
  const [debtMapList, setDebtMapList] = useState<DebtMapType[]>([]);

  const convertFloat = (
    possibleFloat: string,
    splitSymbol: string,
    prefixed: boolean
  ): number => {
    const splitPossibleFloat = possibleFloat.split(`${splitSymbol}`);
    const prefixPostfixPossibleFloat = prefixed
      ? splitPossibleFloat[1]
      : splitPossibleFloat[0];
    const floatNumber = Number.parseFloat(prefixPostfixPossibleFloat);

    if (Number.isNaN(floatNumber)) {
      return Number.NaN;
    }
    return floatNumber;
  };

  const buildFailedObject = (
    debtAmount: number,
    debtInterestRate: number,
    debtPayment: number,
    debtName: string
  ): DebtMapConvertFailureType => {
    const failureObject: DebtMapConvertFailureType = {};

    if (Number.isNaN(debtAmount)) {
      failureObject.debtAmount = true;
    }

    if (Number.isNaN(debtInterestRate)) {
      failureObject.debtInterestRate = true;
    }

    if (Number.isNaN(debtPayment)) {
      failureObject.debtPayment = true;
    }

    if (debtName.length === 0) {
      failureObject.debtName = true;
    }

    return failureObject;
  };

  const addToDebtMapList = (
    newElement: DebtMapPreConvertType
  ): AddToDebtMapReturn => {
    const newDebtAmount = convertFloat(newElement.debtAmount, "$", true);
    const newInterestRate =
      convertFloat(newElement.debtInterestRate, "%", false) / 100;
    const newPayment = convertFloat(newElement.debtPayment, "$", true);
    const failureObject = buildFailedObject(
      newDebtAmount,
      newInterestRate,
      newPayment,
      newElement.debtName
    );
    if (Object.keys(failureObject).length > 0) {
      return { success: false, failedObject: failureObject };
    }
    const newDebt = {
      debtAmount: newDebtAmount,
      debtInterestRate: newInterestRate,
      debtPayment: newPayment,
      debtName: newElement.debtName,
    } as DebtMapType;
    setDebtMapList([...debtMapList, newDebt]);
    return { success: true, failedObject: failureObject };
  };

  return (
    <DebtMapContext.Provider value={{ debtMapList, addToDebtMapList }}>
      {children}
    </DebtMapContext.Provider>
  );
};

export { useDebtMapContext, DebtMapProvider };
