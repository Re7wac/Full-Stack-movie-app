const mongoose = require('mongoose');

//For making changes to a collection is needed to creaete a model for it.
//First is needed to create a Schema. The Schema is an object that represents
//The basic structure of the documents that will be inside the collections.
const MovieReviewsSchema = new mongoose.Schema({
    //For each of the properties is needed to specify some options like
    //the type of the property, if it is required to have it and many more...
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    movieTitle: {
        type: String,
        required: true
    },
    movieID: {
        type: String,
        required: true
    }
});


//After creating the Schema is possible to create a model from it. To do it we use 
//the model method from mongoose, and the first parameter is the name of the collection
//and the second one is the schema created previously.
const MovieReviews = mongoose.model('MovieReviews', MovieReviewsSchema);

module.exports = MovieReviews;