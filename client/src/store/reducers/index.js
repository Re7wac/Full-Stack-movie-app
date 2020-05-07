import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";
import reivewReducer from "./ReviewReducer"

export default combineReducers({
    movies: MovieReducer,
    reivews: reivewReducer

});