import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import detailReducer from './detailReducer';
import podcastReducer from './podcastReducer';

export default combineReducers({
    search: searchReducer,
    detail: detailReducer,
    podcast: podcastReducer,
})