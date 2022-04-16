import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import commentReducer from "./commentsReducer";
import reduxPromise from 'redux-promise'
import {composeWithDevTools} from 'redux-devtools-extension'
export default function getStore(initialState = {}) {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  return createStore(
    combineReducers({
      comments: commentReducer,
    }),
    initialState,
    applyMiddleware(reduxPromise)
    );

}
