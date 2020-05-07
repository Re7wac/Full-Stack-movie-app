import {
    FETCH_REVIEWS_BEGIN,
    FETCH_REVIEWS_SUCCESS,
    FETCH_REVIEWS_FAIL,


    SAVE_REVIEWS_SUCCESS,
    SAVE_REVIEWS_FAIL,

    UPDATE_REVIEWS_FAIL,
    UPDATE_REVIEWS_SUCCESS,

    DELETE_REVIEWS_FAIL,
    DELETE_REVIEWS_SUCCESS,

    FETCH_MOVIE_REVIEWS_BEGIN,
    FETCH_MOVIE_REVIEWS_SUCCESS,
    FETCH_MOVIE_REVIEWS_FAIL



} from "../types";


const initialState = {
    isLoading: false,
    error: false,
    errorMessage: '',
    reivewList: [],
    newReview: {},
    deleteReview: {},
    updateReview: {},
    movieReviews: {}
};

let newReviewList;

export default function ReviewReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_REVIEWS_BEGIN:
        case FETCH_MOVIE_REVIEWS_BEGIN:
            return {
                ...state,
                isLoading: true,
                error: false,
                errorMessage: ''
            }

        case FETCH_MOVIE_REVIEWS_FAIL:
        case FETCH_REVIEWS_FAIL:
        case SAVE_REVIEWS_FAIL:
        case DELETE_REVIEWS_FAIL:
        case UPDATE_REVIEWS_FAIL:

            return {
                ...state,
                error: true,
                errorMessage: action.payload,
                isLoading: true
            }
        case FETCH_MOVIE_REVIEWS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movieReviews: action.payload
            }
        case FETCH_REVIEWS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                reivewList: action.payload
            }
        case SAVE_REVIEWS_SUCCESS:
            newReviewList = [...state.reivewList, action.payload]
            return {
                ...state,
                reivewList: newReviewList,
                newReview: action.payload
            }

        case UPDATE_REVIEWS_SUCCESS:
            newReviewList = state.reivewList.map(reivew => {
                if (reivew._id === action.payload._id) {
                    return action.payload
                } else {
                    return reivew._id
                }
            })
            return {
                ...state,
                reivewList: newReviewList,
                updateReview: action.payload
            }

        case DELETE_REVIEWS_SUCCESS:
            newReviewList = state.reivewList.filter(reivew => {
                if (reivew._id === action.payload.id) {
                    return false
                } else {
                    return true
                }
            })

            return {
                ...state,
                reivewList: newReviewList,
                deleteReview: action.payload
            }



        default:
            return state
    }
}
