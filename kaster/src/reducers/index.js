import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import detailReducer from './detailReducer';

export default combineReducers({
    search: searchReducer,
    detail: detailReducer,
})