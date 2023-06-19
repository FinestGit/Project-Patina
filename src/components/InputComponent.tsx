import React from "react";
import "../styles/components/inputComponent.scss";
import { ClampHook } from "../models/types/ClampHook";
interface InputComponentProperties<T> {
  value: T;
  changeHandler: (
    // eslint-disable-next-line no-unused-vars, no-undef
    event: React.ChangeEvent<HTMLInputElement>,
    // eslint-disable-next-line no-unused-vars
    clampHook: ClampHook<T>
  ) => void;
  // eslint-disable-next-line no-unused-vars
  clampHook: ClampHook<T>;
}

type GenericFC<T> = React.FC<InputComponentProperties<T>>;

const InputComponent: GenericFC<any> = ({
  value,
  changeHandler,
  clampHook,
}): React.ReactElement => {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => changeHandler(event, clampHook(event.target.value))}
    />
  );
};

export default InputComponent;
