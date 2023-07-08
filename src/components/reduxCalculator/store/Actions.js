import {SET_NUMBER, SET_FUNC, SET_CLEAR, SET_RESULT, SET_BACK, SET_PROCENT} from './Constants';

export const setNumberAction = (payload) => ({ type: SET_NUMBER, payload });
export const setFunctionAction = (payload) => ({ type: SET_FUNC, payload });
export const setClearAction = () => ({ type: SET_CLEAR });
export const setResultAction = () => ({ type: SET_RESULT });
export const setBackAction = () => ({ type: SET_BACK });
export const setProcentAction = () => ({ type: SET_PROCENT });