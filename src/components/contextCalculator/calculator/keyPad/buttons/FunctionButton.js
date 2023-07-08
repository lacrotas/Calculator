import PropTypes from 'prop-types';
import { NumberContext } from '../../../NumberProvider';
import React, { useContext } from 'react';
import './Buttons.scss';

 function FunctionButton({symbolElement}) {
  const { handleSetCalcFunction } = useContext(NumberContext);
    return (
      <div className={"button button_function"} onClick={() => handleSetCalcFunction(symbolElement)}>
        <p>{symbolElement}</p>
      </div>
    );
  }
  FunctionButton.propTypes = {
    symbolElement: PropTypes.string.isRequired,
  };
  export default FunctionButton;