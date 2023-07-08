import './Display.scss';
import { useSelector } from "react-redux";

function Display() {
  const leftNumber = useSelector(state => state.leftNumber);
  const rightNumber = useSelector(state => state.rightNumber);
  const functionType = useSelector(state => state.functionType);
  const result = useSelector(state => state.result);
  const prevResult = useSelector(state => state.prevResult);
  
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