import React from "react";
import "../styles/components/inputComponent.scss";

interface InputComponentProperties<T> {
  value: T;
  // eslint-disable-next-line no-unused-vars, no-undef
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type GenericFC<T> = React.FC<InputComponentProperties<T>>;

const InputComponent: GenericFC<any> = ({
  value,
  changeHandler,
}): React.ReactElement => {
  return (
    <input value={value} onChange={(event) => changeHandler(event)}></input>
  );
};

export default InputComponent;
