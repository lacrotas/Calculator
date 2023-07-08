import { useDispatch } from "react-redux";
import NumberButton from "./buttons/NumberButton";
import BackButton from "./buttons/BackButton";
import { BUTTON_NUMBER, BUTTON_OPERATOR } from "../../../../constants/buttons";
import './KeyPad.scss';
import { setNumberAction, setFunctionAction, setClearAction, setResultAction, setBackAction, setProcentAction } from "../../store/Actions";
import { useEffect } from 'react';

function KeyPad() {

    const dispatch = useDispatch();

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true);
    }, []);

    const detectKeyDown = (e) => {
        if(e.key === '0' || e.key === '1' || e.key === '2' ||e.key === '3' || e.key === '4'||e.key === '5' || e.key === '6' ||e.key === '7' || e.key === '8'||e.key === '9' || e.key === '.'){
            dispatch(setNumberAction(e.key));
        }else if(e.key === '+' || e.key === '-' ||e.key === '*' || e.key === '/'){
            dispatch(setFunctionAction(e.key));
        }else if(e.key === 'Enter'){
            dispatch(setResultAction());
        }
    }


    function addNumber(symbol) {
        dispatch(setNumberAction(symbol))
    }
    function addFunction(symbol) {
        dispatch(setFunctionAction(symbol))
    }
    function setClear() {
        dispatch(setClearAction())
    }
    function setResult() {
        dispatch(setResultAction())
    }
    function setBack() {
        dispatch(setBackAction())
    }
    function setProcent() {
        dispatch(setProcentAction())
    }

    return (
        <div className="keypad">
            <div className='keypad_bottom'>
                <NumberButton symbolElement={'='} addNumber={setResult} />
                <BackButton addNumber={setBack} />
                <NumberButton symbolElement={'C'} addNumber={setClear} />
                <NumberButton symbolElement={'%'} addNumber={setProcent} />
            </div>
            <div className='number_grid'>
                {BUTTON_NUMBER.map((button, index) => <NumberButton key={index} symbolElement={button} addNumber={addNumber} />)}
            </div>
            <div className='operator_flexbox'>
                {BUTTON_OPERATOR.map(button => (<NumberButton key={button} symbolElement={button} addNumber={addFunction} />))}
            </div>
        </div>
    );
}

export default KeyPad;