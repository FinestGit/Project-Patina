import { useState } from "react";
import InputComponent from "./components/InputComponent";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  // eslint-disable-next-line no-undef
  const inputComponentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 21) {
      setInputValue(event.target.value);
    } else {
      setInputValue(inputValue);
    }
  };
  return (
    <div className="app-container">
      <InputComponent value={inputValue} changeHandler={inputComponentChange} />
    </div>
  );
};

export default App;
