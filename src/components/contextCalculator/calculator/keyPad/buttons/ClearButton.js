import PropTypes from 'prop-types';
import { NumberContext } from '../../../NumberProvider';
import React, { useContext } from 'react';
import './Buttons.scss';

 function ClearButton({symbolElement}) {
  const { handleClearValue } = useContext(NumberContext);
    return (
      <div className={"button button_clear"} onClick={() => handleClearValue()}>
        <p>{symbolElement}</p>
      </div>
    );
  }
  ClearButton.propTypes = {
    symbolElement: PropTypes.string.isRequired,
  };
export default ClearButton;