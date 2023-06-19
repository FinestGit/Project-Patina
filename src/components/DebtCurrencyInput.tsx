import React, { ChangeEvent, useCallback, useState } from "react";
import "../styles/components/debtCurrencyInput.scss";

interface DebtCurrencyInputProperties {
  label: string;
}

const DebtCurrencyInput: React.FC<DebtCurrencyInputProperties> = ({
  label,
}): React.ReactElement => {
  const [displayValue, setDisplayValue] = useState<string>("");

  const handleChange = useCallback(
    // eslint-disable-next-line no-undef
    (event: ChangeEvent<HTMLInputElement>): void => {
      const newValue = event.target.value;

      if (newValue.length > 0) {
        const lastCharIndex = newValue.length - 1;
        const lastChar = newValue.charAt(lastCharIndex);

        if ((lastChar >= "0" && lastChar <= "9") || lastChar == ".") {
          setDisplayValue(newValue);
        }
      } else {
        setDisplayValue(newValue);
      }
    },
    []
  );

  const handleOnBlur = (): void => {
    const newValue = displayValue;
    const floatValue = Number.parseFloat(newValue);

    if (Number.isNaN(floatValue)) {
      setDisplayValue("");
      return;
    }

    setDisplayValue(`$${floatValue.toFixed(2)}`);
  };

  const handleOnFocus = (): void => {
    const displayedValueSplit = displayValue.split("$")[1];
    const newValue =
      displayedValueSplit === undefined ? "" : displayedValueSplit;
    setDisplayValue(newValue);
  };

  return (
    <div className="debt-currency-input-container">
      <label htmlFor="debt-currency">{label}</label>
      <input
        id="debt-currency"
        type="text"
        value={displayValue}
        onChange={(event) => handleChange(event)}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
      />
    </div>
  );
};

export default DebtCurrencyInput;
