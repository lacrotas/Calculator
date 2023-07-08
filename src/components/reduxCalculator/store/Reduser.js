import { SET_NUMBER, SET_FUNC, SET_CLEAR, SET_RESULT, SET_BACK, SET_PROCENT } from './Constants';

const defaultState = {
    leftNumber: '',
    functionType: '',
    rightNumber: '',
    result: false,
    prevResult: '',
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_NUMBER:
            if (state.functionType) {
                if ((!state.rightNumber.includes('.') || action.payload !== '.')) {
                    return { ...state, rightNumber: state.rightNumber + action.payload };
                } else {
                    return { ...state, rightNumber: state.rightNumber };
                }
            }
            else {
                if ((!state.leftNumber.includes('.') || action.payload !== '.')) {
                    return { ...state, leftNumber: state.leftNumber + action.payload };
                } else {
                    return { ...state, rightNumber: state.rightNumber };
                }
            }
        case SET_FUNC:
            if (state.functionType) {
                return { ...state, functionType: action.payload };
            } else {
                return { ...state, functionType: state.functionType + action.payload };
            }
        case SET_CLEAR:
            return {
                ...state,
                leftNumber: '',
                functionType: '',
                rightNumber: '',
                result: '',
                prevResult: ''
            }
        case SET_RESULT:
            if (state.leftNumber && state.rightNumber && state.functionType) {
                switch (state.functionType) {
                    case '+':
                        return {
                            ...state, result: true,
                            prevResult: `${state.leftNumber} ${state.functionType} ${state.rightNumber} = `,
                            leftNumber: `${Math.round(`${(parseFloat(state.leftNumber) + parseFloat(state.rightNumber)) * 100}`) / 100}`,
                            functionType: '',
                            rightNumber: ''
                        };
                    case '-':
                        return {
                            ...state, result: true,
                            prevResult: `${state.leftNumber} ${state.functionType} ${state.rightNumber} = `,
                            leftNumber: `${Math.round(`${(parseFloat(state.leftNumber) - parseFloat(state.rightNumber)) * 1000}`) / 1000}`,
                            functionType: '',
                            rightNumber: ''
                        };
                    case '/':
                        return {
                            ...state, result: true,
                            prevResult: `${state.leftNumber} ${state.functionType} ${state.rightNumber} = `,
                            leftNumber: `${Math.round(`${(parseFloat(state.leftNumber) / parseFloat(state.rightNumber)) * 1000}`) / 1000}`,
                            functionType: '',
                            rightNumber: ''
                        };
                    case '*':
                        return {
                            ...state, result: true,
                            prevResult: `${state.leftNumber} ${state.functionType} ${state.rightNumber} = `,
                            leftNumber: `${Math.round(`${parseFloat(state.leftNumber) * parseFloat(state.rightNumber) * 1000}`) / 1000}`,
                            functionType: '',
                            rightNumber: ''
                        };
                    default:
                        break;
                }
            }
            break;
        case SET_BACK:
            if (state.functionType) {
                const deletedNumber = state.rightNumber.slice(0, state.rightNumber.length - 1);
                return { ...state, rightNumber: deletedNumber };
            } else {
                const deletedNumber = state.leftNumber.slice(0, state.leftNumber.length - 1);
                return { ...state, leftNumber: deletedNumber };
            }
        case SET_PROCENT:
            return { ...state, leftNumber: String(state.leftNumber / 100) };
        default:
            return state;
    }
}

