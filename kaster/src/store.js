import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import allReducers from './reducers';

const middlewares = applyMiddleware(promise());
export default createStore(allReducers, middlewares);