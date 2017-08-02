import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

export default createStore({}, {}, applyMiddleware(
    logger,
    thunk,
    promise()
));