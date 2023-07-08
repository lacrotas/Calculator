import React, { useContext } from 'react';
import { NumberContext } from '../../NumberProvider';
import './Display.scss';

function Display() {
  const { leftNumber, rightNumber, functionType, result, prevResult } = useContext(NumberContext);
  return (
    <div className='display'>
      <div className='display_container'>
        <p className='display_current'>
          {prevResult}
        </p>
        <h2 className='display_result'>
          {!leftNumber ? '0' : result ? <></> : `${leftNumber} ${functionType} ${rightNumber}`}
          {result ? `${leftNumber} ${functionType} ${rightNumber}` : <></>}
        </h2>
      </div>
    </div>
  );
}
export default Display;