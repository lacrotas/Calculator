import React, { useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = props => {

  const [leftNumber, setLeftNumber] = useState('');
  const [rightNumber, setRightNumber] = useState(''); 
  const [functionType, setFunctionType] = useState('');
  const [result, setResult] = useState('');             
  const [prevResult, setPrevResult] = useState('');       

  const handleSetNumber = num => {
    if (functionType) {
      if ((!rightNumber.includes('.') || num !== '.') && rightNumber.length < 8) {
        setRightNumber((`${(rightNumber + num)}`));
      }
    } else {
      if ((!leftNumber.includes('.') || num !== '.') && leftNumber.length < 8) {
        setLeftNumber(`${(leftNumber + num)}`);
      }
    }
  };

  const handleClearValue = () => {
    setLeftNumber('');
    setRightNumber('');
    setFunctionType('');
    setPrevResult('');
  };

  const handleBackButton = () => {
    if (functionType) {
      const deletedNumber = rightNumber.slice(0, rightNumber.length - 1);
      setRightNumber(deletedNumber);
    }else{
      const deletedNumber = leftNumber.slice(0, leftNumber.length - 1);
      setLeftNumber(deletedNumber);
    }
  };

  const handleSetCalcFunction = type => {
    if (leftNumber && rightNumber) {
      doMath();
      setFunctionType(type);
    } else if (leftNumber) {
      setFunctionType(type);
    }
  };

  const handleSetProcent = () => {
    if (leftNumber) {
      setLeftNumber(String(leftNumber/100));
    }
  };

  const doMath = () => {
    if (leftNumber && rightNumber) {
      switch (functionType) {
        case '+':
          setResult(`${Math.round(`${(parseFloat(leftNumber) + parseFloat(rightNumber)) * 100}`) / 100}`);
          setLeftNumber(`${Math.round(`${(parseFloat(leftNumber) + parseFloat(rightNumber)) * 100}`) / 100}`);
          break;
        case '-':
          setResult(`${Math.round(`${(parseFloat(leftNumber) - parseFloat(rightNumber)) * 1000}`) / 1000}`);
          setLeftNumber(`${Math.round(`${(parseFloat(leftNumber) - parseFloat(rightNumber)) * 100}`) / 100}`);
          break;
        case '/':
          setResult(`${Math.round(`${(parseFloat(leftNumber) / parseFloat(rightNumber)) * 1000}`) / 1000}`);
          setLeftNumber(`${Math.round(`${(parseFloat(leftNumber) / parseFloat(rightNumber)) * 100}`) / 100}`);
          break;
        case '*':
          setResult(`${Math.round(`${parseFloat(leftNumber) * parseFloat(rightNumber) * 1000}`) / 1000}`);
          setLeftNumber(`${Math.round(`${(parseFloat(leftNumber) * parseFloat(rightNumber)) * 100}`) / 100}`);
          break;
        default:
          break;
      }
      setPrevResult(`${leftNumber} ${functionType} ${rightNumber} =`);
      setFunctionType('');
      setRightNumber('');
    }
  };

  return (
    <NumberContext.Provider
      value={{
        functionType,
        leftNumber,
        rightNumber,
        result,
        prevResult,
        doMath,
        handleBackButton,
        handleClearValue,
        handleSetCalcFunction,
        handleSetNumber,
        handleSetProcent,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;