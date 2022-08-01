import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers";

const middlewares = [thunk];

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
    allReducers,
    composeEnhancers(applyMiddleware(...middlewares))
);

export default store;