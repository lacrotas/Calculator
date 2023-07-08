import './Buttons.scss';
import PropTypes from 'prop-types';

 function BackButton({ addNumber }) {
    return (
      <div className={"button button_back"} onClick={() => addNumber()}>
        <p>&#8592;</p>
      </div>
    );
  }
  BackButton.propTypes = {
    addNumber: PropTypes.func.isRequired,
  };
  export default BackButton;