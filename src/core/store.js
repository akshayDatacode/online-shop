import { createStore, applyMiddleware, compose } from "redux";
// import logger from 'redux-logger';
import thunk from "redux-thunk";
import rootReducer from './rootReducer';

// const middlewares = [logger, thunk];

const composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
