import './App.scss';
import React from 'react';
import ContextCalculator from './components/contextCalculator/ContextCalculator';
import ReduxCalculator from './components/reduxCalculator/ReduxCalculator';
import { useState } from 'react';

function App() {
  const [isContextCalc, setIsContextCalc] = useState(true);

  return (
    <div className="App">
      <div className='switch_container'>
        <button className={'switch_button context context'+ isContextCalc} onClick={() => { setIsContextCalc(true) }}>Context</button>
        <button className={'switch_button redux redux'+ !isContextCalc} onClick={() => { setIsContextCalc(false) }}>Redux</button>
      </div>
      {isContextCalc ? <ContextCalculator /> : <ReduxCalculator />}
    </div>
  );
}

export default App;