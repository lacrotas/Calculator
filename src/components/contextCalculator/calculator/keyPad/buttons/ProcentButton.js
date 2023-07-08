import PropTypes from 'prop-types';
import { NumberContext } from '../../../NumberProvider';
import React, { useContext } from 'react';
import './Buttons.scss';

 function ProcentButton({symbolElement}) {
  const { handleSetProcent } = useContext(NumberContext);
    return (
      <div className={"button"} onClick={() => handleSetProcent()}>
        <p>{symbolElement}</p>
      </div>
    );
  }
  ProcentButton.propTypes = {
    symbolElement: PropTypes.string.isRequired,
  };
  export default ProcentButton;