type DebtMapPreConvertType = {
  debtName: string;
  debtInterestRate: string;
  debtPayment: string;
  debtAmount: string;
};

type DebtMapConvertFailureType = {
  debtName?: boolean;
  debtInterestRate?: boolean;
  debtPayment?: boolean;
  debtAmount?: boolean;
};

type DebtMapType = {
  debtName: string;
  debtInterestRate: number;
  debtPayment: number;
  debtAmount: number;
};

export type { DebtMapType, DebtMapPreConvertType, DebtMapConvertFailureType };
