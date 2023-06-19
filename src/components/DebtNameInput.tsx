import React, { ChangeEvent, useCallback, useState } from "react";
import "../styles/components/debtNameInput.scss";

const DebtNameInput: React.FC = (): React.ReactElement => {
  const [displayValue, setDisplayValue] = useState<string>("");

  const handleChange = useCallback(
    (
      // eslint-disable-next-line no-undef
      event: ChangeEvent<HTMLInputElement>
    ): void => {
      const newValue = event.target.value;

      if (newValue.length > 0) {
        const firstChar = newValue.charAt(0);

        if (!(firstChar >= "0" && firstChar <= "9")) {
          setDisplayValue(newValue);
        }
      } else {
        setDisplayValue(newValue);
      }
    },
    []
  );

  return (
    <div className="debt-name-input-container">
      <label htmlFor="debt-name">Debt Name</label>
      <input
        id="debt-name"
        type="text"
        value={displayValue}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
};

export default DebtNameInput;
