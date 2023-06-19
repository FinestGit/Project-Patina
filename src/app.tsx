import DebtCurrencyInput from "./components/DebtCurrencyInput";
import DebtNameInput from "./components/DebtNameInput";
import DebtPercentageInput from "./components/DebtPercentageInput";

const App = () => {
  // eslint-disable-next-line no-undef
  console.log("Rendered, App");
  return (
    <div className="app-container">
      <DebtNameInput />
      <DebtPercentageInput />
      <DebtCurrencyInput label="Payment" />
      <DebtCurrencyInput label="Amount Owed" />
    </div>
  );
};

export default App;
