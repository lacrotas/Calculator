import PropTypes from 'prop-types';
import './Buttons.scss';

function NumberButton({ symbolElement, addNumber }) {
  return (
    <div className={"button button_number" + symbolElement} onClick={()=>addNumber(symbolElement)} >
      <p>{symbolElement}</p>
    </div>
  );
}

NumberButton.propTypes = {
  symbolElement: PropTypes.string.isRequired,
  addNumber: PropTypes.func.isRequired,
};
export default NumberButton;