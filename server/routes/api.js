const express = require('express');
const router = express.Router();
const MovieReviews = require('../models/MovieReviews');

router.get('/get-review', async (req, res) => {

    //We need await, to get data first from MongoDB and then send
    //it as a response to the route.
    let reviews = await MovieReviews.find();

    res.send(reviews)
})

router.post('/new-review', (req, res) => {
    // using destructive assingment to get the data from the body request.
    let { title, rating, comment, movieTitle, movieID } = req.body;

    //Creating the new document for reviews. It is needed to use the Model created
    // for the collection. In this case the MovieReviews model.
    let newReview = new MovieReviews({
        title: title,
        rating: parseInt(rating),
        comment: comment,
        movieTitle: movieTitle,
        movieID: movieID
    })

    //After creating the new document, it is needed to save it on the MongoDB server
    //For that, we use the method ".save()"
    newReview.save()
        .then(response => {//This ".then()" will only run if the save action was successful
            console.log(response)
            res.send({ msg: 'new review saved', mongo_response: response })
        }).catch(error => {//This will catch any error at the moment of saving the document.
            console.log(error)
            res.send({ msg: error })
        })


})

router.put('/update-review', (req, res) => {
    //Here again using destructive assignment. Is important to notice we are getting
    //the id also here, as it is needed to know which document we want to update
    let { title, rating, comment, id, movieTitle, movieID } = req.body;

    //Here we are creating an object with the data we want to update. this object will
    //be passed to the method to update the document in the MongoDB server.
    let newData = {
        title: title,
        rating: parseInt(rating),
        comment: comment,
        movieTitle: movieTitle,
        movieID: movieID
    }

    //To update it is needed to use the model of the collection that has the
    //document we want to update. We could use "findOneAndUpdate" instead of the
    //method used and achieve the same results.
    MovieReviews.findByIdAndUpdate(id, newData)
        .then(response => {// It is important to note that the response obtained is the old document previous to the update.
            console.log(response)
            res.send({ msg: "Review was updated", mongo_response: response })
        }).catch(error => {
            res.send({ msg: error })
        })
})

router.delete('/delete-review', (req, res) => {

    //For deleting a document we need a unique attribute like the id created by
    //MongoDB at the moment of creating a document.
    let { id } = req.body;

    //Similar to the update, we use "findByIdAndDelete" method for deleting a unique document.
    //The method "findOneAndDelete" could be used also.
    MovieReviews.findByIdAndDelete(id)
        .then(response => {
            console.log(response)
            res.send({ msg: 'Review was deleted', mongo_response: response })
        }).catch(error => {
            res.send({ msg: error })
        })

})

//http://google.com/?search="javascript"&lan=english
//Everything after the question mark (?) is taked query varibels
router.get('/get-reviews-movie', async (req, res) => {
    let movieID_req = req.query.movieid;

    let reviews = await MovieReviews.find({ movieID: movieID_req })

    res.send(reviews)
})

module.exports = router;