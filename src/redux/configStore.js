import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {CarouselReducer} from "./reducers/CarouselReducer";
import {MovieReducer} from "./reducers/MovieReducer";
import {CinemaReducer} from "./reducers/CinemaReducer";
import {UserReducer} from "./reducers/UserReducer";
import {ToggleContenReducer} from "./reducers/ToggleContentReducerr";

const rootReducer = combineReducers({
  //application state
  CarouselReducer,
  MovieReducer,
  CinemaReducer,
  UserReducer,
  ToggleContenReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
