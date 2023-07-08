import PropTypes from 'prop-types';
import './Buttons.scss';
import React, { useContext } from 'react'
import { NumberContext } from '../../../NumberProvider';

function NumberButton({ symbolElement }) {
  const { handleSetNumber } = useContext(NumberContext);
  return (
    <div className={"button button_number" + symbolElement}  onClick={() => handleSetNumber(symbolElement)}>
      <p>{symbolElement}</p>
    </div>
  );
}

NumberButton.propTypes = {
  symbolElement: PropTypes.string.isRequired,
};
export default NumberButton;