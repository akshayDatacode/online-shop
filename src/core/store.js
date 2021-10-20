import { createStore, applyMiddleware, compose } from "redux";
// import logger from 'redux-logger';
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const middlewares = [logger, thunk];

const persistConfig = {
  key: "shop",
  storage: storage,
  whitelist: ["shop"], // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(pReducer, composeEnhancers(applyMiddleware(thunk)));

persistStore(store);

export default store;
