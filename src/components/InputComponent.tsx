import React, { ChangeEvent, useState } from "react";
import "../styles/components/inputComponent.scss";

interface InputComponentProperties {
  label: string;
  type: React.HTMLInputTypeAttribute;
  displayValue: string;
  // eslint-disable-next-line no-unused-vars, no-undef
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;

  // Optional properties
  additionalClassName?: string;
  placeholderExample?: string;
  handleOnBlur?: () => void;
  handleOnFocus?: () => void;
}

const InputComponent: React.FC<InputComponentProperties> = ({
  label,
  type,
  displayValue,
  additionalClassName,
  placeholderExample,
  handleOnChange,
  handleOnBlur,
  handleOnFocus,
}) => {
  // Use State Definitions
  // eslint-disable-next-line no-unused-vars
  const [_, setIsFocused] = useState<boolean>(false);

  // Other Constant variable definitions
  const labelInputIdentifier = label.toLowerCase().split(" ").join("-");

  const handleFocus = () => {
    setIsFocused(true);
    if (handleOnFocus) {
      handleOnFocus();
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (handleOnBlur) {
      handleOnBlur();
    }
  };

  return (
    <div className="input-component-container">
      <label htmlFor={labelInputIdentifier}>{label}</label>
      <input
        id={labelInputIdentifier}
        type={type}
        value={displayValue}
        className={`${additionalClassName}`}
        placeholder={placeholderExample}
        onChange={(event) => handleOnChange(event)}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  );
};

export default InputComponent;
