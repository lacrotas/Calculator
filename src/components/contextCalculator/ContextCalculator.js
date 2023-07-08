import NumberProvider from './NumberProvider';
import KeyPad from './calculator/keyPad/KeyPad';
import Display from './calculator/display/Display';

function ContextCalculator() {
  return (
    <div className="calc">
      <p>Context calculator</p>
      <NumberProvider>
          <Display />
          <KeyPad />
      </NumberProvider>
    </div>
  );
}

export default ContextCalculator;