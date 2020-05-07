import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
})


const getReviewsList = () => api.get('/get-review');

const saveReviews = (data) => api.post('/new-review', data);

const updateReview = (data) => api.put('/update-review', data);

const deleteReview = (data) => api.delete('/delete-review', data);

const getMovieReview = (movieID) => api.get(`/get-reviews-movie?movieid=${movieID}`)

const apis = {
    getReviewsList,
    saveReviews,
    updateReview,
    deleteReview,
    getMovieReview
}

export default apis