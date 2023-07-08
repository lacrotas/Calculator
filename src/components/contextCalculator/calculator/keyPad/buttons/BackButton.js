import { NumberContext } from '../../../NumberProvider';
import React, { useContext } from 'react';
import './Buttons.scss';

 function BackButton() {
  const { handleBackButton } = useContext(NumberContext);
    return (
      <div className={"button button_back"} onClick={() => handleBackButton()}>
        <p>&#8592;</p>
      </div>
    );
  }
  export default BackButton;