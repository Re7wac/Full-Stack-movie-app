import {
    FETCH_MOVIE_BEGIN,
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_FAIL,
    FETCH_SEARCH_BEGIN,
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_FAIL

} from "../types";

const initialState = {
    movieList: [],
    selectedMovie: {},
    isLoading: false,
    error: false,
    errorMessage: ''
};


export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIE_BEGIN:
        case FETCH_SEARCH_BEGIN:

            return {
                ...state,
                isLoading: true,
                error: false,
                errorMessage: ''
            }
        case FETCH_SEARCH_FAIL:
        case FETCH_MOVIE_FAIL:

            return {
                ...state,
                isLoading: false,
                error: true,
                errorMessage: action.payload
            }

        case FETCH_MOVIE_SUCCESS:


            return {
                ...state,
                isLoading: false,
                selectedMovie: action.payload
            }

        case FETCH_SEARCH_SUCCESS:

            return {
                ...state,
                isLoading: false,
                movieList: action.payload
            }

        default:
            return state
    }
}