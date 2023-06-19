import React, { ChangeEvent } from "react";
import "../styles/components/inputComponent.scss";

interface InputComponentProperties {
  label: string;
  type: React.HTMLInputTypeAttribute;
  displayValue: string;
  // eslint-disable-next-line no-unused-vars, no-undef
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleOnBlur?: () => void;
  handleOnFocus?: () => void;
}

const InputComponent: React.FC<InputComponentProperties> = ({
  label,
  type,
  displayValue,
  handleOnChange,
  handleOnBlur,
  handleOnFocus,
}) => {
  const labelInputIdentifier = label.toLowerCase().split(" ").join("-");
  return (
    <div className="input-component-container">
      <label htmlFor={labelInputIdentifier}>{label}</label>
      <input
        id={labelInputIdentifier}
        type={type}
        value={displayValue}
        onChange={(event) => handleOnChange(event)}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
      />
    </div>
  );
};

export default InputComponent;
