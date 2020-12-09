import {combineReducers} from 'redux';

import registerReducer from './registerReducer'

/**
 * @returns {combineReducers}
 */
const appReducer = combineReducers({
  register: registerReducer
});

export default appReducer;
