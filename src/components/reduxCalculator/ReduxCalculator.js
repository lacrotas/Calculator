import { Provider } from "react-redux";
import KeyPad from "./calculator/keyPad/KeyPad";
import Display from "./calculator/display/Display";
import { store } from "./store/index";

function ReduxCalculator() {
  return (
    <Provider store={store}>
      <div className="calc">
        <p>Redux calculator</p>
        <Display />
        <KeyPad />
      </div>
    </Provider>
  );
}

export default ReduxCalculator;