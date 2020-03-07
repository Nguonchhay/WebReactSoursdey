import { combineReducers } from 'redux';

import languageReducer from './languageReducer';
import postReducer from './postReducer';

export default combineReducers({
    languageReducer,
    postReducer
});