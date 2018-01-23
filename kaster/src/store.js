import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger'
import allReducers from './reducers';

const middlewares = applyMiddleware(promise(), logger);
export default createStore(allReducers, middlewares);