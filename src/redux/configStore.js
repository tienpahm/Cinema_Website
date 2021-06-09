import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  //application state
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
