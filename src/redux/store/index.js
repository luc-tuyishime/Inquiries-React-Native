import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import initialState from "./initialState";
import reducers from "../reducers";
import apiMiddleware from "../../middleware/apiMiddleware";

const middlewares = [thunk, apiMiddleware];

export default createStore(
    combineReducers(reducers),
    initialState,
    applyMiddleware(...middlewares)
);
