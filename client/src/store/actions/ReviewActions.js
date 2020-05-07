import serverapi from '../../api/serverapi'


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


const fetchReviewsBegin = () => ({
    type: FETCH_REVIEWS_BEGIN
})

const fetchReviewsSuccess = (reviews) => ({
    type: FETCH_REVIEWS_SUCCESS,
    payload: reviews
})

const fetchReviewsFail = (error) => ({
    type: FETCH_REVIEWS_FAIL,
    payload: error
})


export const getReviewsList = () => {
    return dispatch => {
        dispatch(fetchReviewsBegin())
        return serverapi.getReviewsList()
            .then(response => {
                dispatch(fetchReviewsSuccess(response.data))
            }).catch(error => {
                dispatch(fetchReviewsFail(error))
            })
    }
}



const fetchMovieReviewsBegin = () => ({
    type: FETCH_MOVIE_REVIEWS_BEGIN
})

const fetchMovieReviewsSuccess = (movieReviews) => ({
    type: FETCH_MOVIE_REVIEWS_SUCCESS,
    payload: movieReviews
})

const fetchMovieReviewsFail = (error) => ({
    type: FETCH_MOVIE_REVIEWS_FAIL,
    payload: error
})


export const getMovieReview = (movieID) => {
    return dispatch => {
        dispatch(fetchMovieReviewsBegin())
        return serverapi.getMovieReview(movieID)
            .then(response => {
                dispatch(fetchMovieReviewsSuccess(response.data))
            }).catch(error => {
                dispatch(fetchMovieReviewsFail(error))
            })
    }
}




const fetchSaveSuccess = (newReview) => ({
    type: SAVE_REVIEWS_SUCCESS,
    payload: newReview

})

const fetchSaveFail = (error) => ({
    type: SAVE_REVIEWS_FAIL,
    payload: error
})


export const saveReviews = (data) => {
    return dispatch => {
        return serverapi.saveReviews(data)
            .then(response => {
                dispatch(fetchSaveSuccess(response.data))
            }).catch(error => {
                dispatch(fetchSaveFail(error))
            })
    }
}




const fetchUpdateSuccess = (newData) => ({
    type: UPDATE_REVIEWS_SUCCESS,
    payload: newData

})

const fetchUpdateFail = (error) => ({
    type: UPDATE_REVIEWS_FAIL,
    payload: error
})


export const updateReview = (newData) => {
    return dispatch => {
        return serverapi.updateReview(newData)
            .then(response => {
                dispatch(fetchUpdateSuccess(response.data))
            }).catch(error => {
                dispatch(fetchUpdateFail(error))
            })
    }
}


const fetchDeleteSuccess = (id) => ({
    type: DELETE_REVIEWS_SUCCESS,
    payload: id

})

const fetchDeleteFail = (error) => ({
    type: DELETE_REVIEWS_FAIL,
    payload: error
})


export const deleteReview = (data) => {
    return dispatch => {
        let config = { data: data }
        return serverapi.deleteReview(config)
            .then(response => {
                dispatch(fetchDeleteSuccess(response.data))
            }).catch(error => {
                dispatch(fetchDeleteFail(error))
            })
    }
}


