const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {
        "userImage" : String,
        "userName" : String,
        "userHandle" : String,
        "verified" : Boolean,
        "time" : String,
        "title" : String,
        "image" : String,
        "imageTitle" : String,
        "imageDesc" : String,
        "comment" : String,
        "retweet" : String,
        "like" : Number,
        "liked" : Boolean
    }, {collection: "tweets"});

module.exports = schema;