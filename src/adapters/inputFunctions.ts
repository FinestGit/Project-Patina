import React, { ChangeEvent, Dispatch } from "react";

const handleFloatOnChange = (
  // eslint-disable-next-line no-undef
  event: ChangeEvent<HTMLInputElement>,
  setter: Dispatch<React.SetStateAction<string>>
): void => {
  const newValue: string = event.target.value;

  if (newValue.length > 0) {
    const lastCharIndex = newValue.length - 1;
    const lastChar = newValue.charAt(lastCharIndex);

    if ((lastChar >= "0" && lastChar <= "9") || lastChar == ".") {
      setter(newValue);
    }
  } else {
    setter(newValue);
  }
};

const handleNoNumberFirstCharOnChange = (
  // eslint-disable-next-line no-undef
  event: ChangeEvent<HTMLInputElement>,
  setter: Dispatch<React.SetStateAction<string>>
): void => {
  const newValue: string = event.target.value;

  if (newValue.length > 0) {
    const firstChar = newValue.charAt(0);

    if (!(firstChar >= "0" && firstChar <= "9")) {
      setter(newValue);
    }
  } else {
    setter(newValue);
  }
};

const handleCurrencyOnBlur = (
  currentValue: string,
  currencySymbol: string,
  setter: Dispatch<React.SetStateAction<string>>
): void => {
  const newValue = currentValue;
  const floatValue = Number.parseFloat(newValue);

  if (Number.isNaN(floatValue)) {
    setter("");
    return;
  }

  setter(`${currencySymbol}${floatValue.toFixed(2)}`);
};

const handlePercentageOnBlur = (
  currentValue: string,
  max: number,
  min: number,
  setter: Dispatch<React.SetStateAction<string>>
): void => {
  const newValue = currentValue;
  const floatValue = Number.parseFloat(newValue);

  if (Number.isNaN(floatValue)) {
    setter("");
    return;
  }

  const clampedValue = Math.min(Math.max(floatValue, min), max);
  const roundedValue = Math.round((clampedValue + Number.EPSILON) * 100) / 100;
  setter(`${roundedValue.toFixed(2)} %`);
};

const handlePreFixedOnFocus = (
  currentValue: string,
  symbolToSplit: string,
  setter: Dispatch<React.SetStateAction<string>>
): void => {
  const valueSplit = currentValue.split(`${symbolToSplit}`)[1];
  const newValue = valueSplit === undefined ? "" : valueSplit;
  setter(newValue);
};

const handlePostFixedOnFocus = (
  currentValue: string,
  symbolToSplit: string,
  setter: Dispatch<React.SetStateAction<string>>
): void => {
  const valueSplit = currentValue.split(`${symbolToSplit}`)[0];
  const newValue = valueSplit === undefined ? "" : valueSplit;
  setter(newValue);
};

export {
  handleFloatOnChange,
  handleNoNumberFirstCharOnChange,
  handleCurrencyOnBlur,
  handlePercentageOnBlur,
  handlePreFixedOnFocus,
  handlePostFixedOnFocus,
};
