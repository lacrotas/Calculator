import PropTypes from 'prop-types';
import { NumberContext } from '../../../NumberProvider';
import React, { useContext } from 'react';
import './Buttons.scss';

 function EquivalButton({symbolElement}) {
  const { doMath } = useContext(NumberContext);
    return (
      <div className={"button button_equal"} onClick={() => doMath()}>
        <p>{symbolElement}</p>
      </div>
    );
  }
  EquivalButton.propTypes = {
    symbolElement: PropTypes.string.isRequired,
  };
  export default EquivalButton;