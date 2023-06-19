import React, { useState } from "react";
import InputComponent from "./components/InputComponent";
import { ClampHook } from "./models/types/ClampHook";
import { usePercentageClampHandler } from "./adapters/clampHandlers";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const partiallyBoundPercentageClampHook = usePercentageClampHandler.bind(
    undefined,
    "",
    100,
    0,
    2
  );

  const inputComponentChange = (
    // eslint-disable-next-line no-undef
    event: React.ChangeEvent<HTMLInputElement>,
    // eslint-disable-next-line no-undef
    clampHook: ClampHook<T>
  ) => {
    const clampedValue = clampHook(event.target.value);
    setInputValue(clampedValue);
  };
  return (
    <div className="app-container">
      <InputComponent
        value={inputValue}
        changeHandler={inputComponentChange}
        clampHook={partiallyBoundPercentageClampHook}
      />
    </div>
  );
};

export default App;
