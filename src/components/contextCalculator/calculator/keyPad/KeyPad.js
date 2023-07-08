import './KeyPad.scss';
import { BUTTON_NUMBER, BUTTON_OPERATOR } from '../../../../constants/buttons';
import NumberButton from './buttons/NumberButton';
import FunctionButton from './buttons/FunctionButton';
import EquivalButton from './buttons/EquivalButton';
import ClearButton from './buttons/ClearButton';
import BackButton from './buttons/BackButton';
import ProcentButton from './buttons/ProcentButton';

function KeyPad() {

  return (
    <div className='keypad'>
      <div className='keypad_bottom'>
        <EquivalButton symbolElement={'='} />
        <BackButton />
        <ClearButton symbolElement={'C'} />
        <ProcentButton symbolElement={'%'} />
      </div>
      <div className='number_grid'>
        {BUTTON_NUMBER.map((button, index) => (<NumberButton key={index} symbolElement={button} />))}
      </div>
      <div className='operator_flexbox'>
        {BUTTON_OPERATOR.map(button => (<FunctionButton key={button} symbolElement={button} />))}
      </div>
    </div>
  )
}
export default KeyPad;