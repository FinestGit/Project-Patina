import React, { ChangeEvent, useCallback, useState } from "react";
import "../styles/components/debtPercentageInput.scss";

const DebtPercentageInput: React.FC = (): React.ReactElement => {
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

    const clampedValue = Math.min(Math.max(floatValue, 0), 100);
    const roundedValue =
      Math.round((clampedValue + Number.EPSILON) * 100) / 100;
    setDisplayValue(`${roundedValue.toFixed(2)} %`);
  };

  const onFocus = (): void => {
    const newValue = displayValue.split("%")[0];
    setDisplayValue(newValue);
  };

  return (
    <div className="debt-percentage-input-container">
      <label htmlFor="debt-percentage">Interest Rate</label>
      <input
        id="debt-percentage"
        type="text"
        value={displayValue}
        onChange={(event) => handleChange(event)}
        onBlur={handleOnBlur}
        onFocus={onFocus}
      />
    </div>
  );
};

export default DebtPercentageInput;
