import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import allReducers from './reducers';

const middlewares = applyMiddleware(promise(), logger, thunk);
export default createStore(allReducers, middlewares);