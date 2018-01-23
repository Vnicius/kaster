import { combineReducers } from 'redux';
import searchReducer from './searchReaducer';

export default combineReducers({
    search: searchReducer,
})