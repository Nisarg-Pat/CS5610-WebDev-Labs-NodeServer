const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {
        "name": String,
        "totalTweets": Number,
        "backImage": String,
        "frontImage": String,
        "handle": String,
        "bio": String,
        "location": String,
        "birthDate": String,
        "dateJoined": String,
        "following": Number,
        "followers": Number
    }, {collection : 'profiles'});

module.exports = schema;