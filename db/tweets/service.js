const dao = require("./dao")

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        dao.findAllTweets()
            .then((tweets) => res.json(tweets));
    }

    const createTweet = (req, res) => {
        dao.createTweet(req.body)
            .then((tweet) => res.json(tweet));
    }

    const deleteTweet = (req, res) => {
        dao.deleteTweet(req.params.id).then((status) => res.send(status));
    }

    const likeTweet = (req, res) => {
        const id = req.params.id;
        dao.findOneTweet(id).then((tweet) => {
            if (tweet.liked === true) {
                tweet.liked = false;
                tweet.like--;
            } else {
                tweet.liked = true;
                tweet.like++;
            }
            dao.updateTweet(req.params.id, tweet)
                .then((status) => res.send(status));
        })
    }

    app.put('/rest/tweets/:id/like', likeTweet);
    app.delete('/rest/tweets/:id', deleteTweet);
    app.post('/rest/tweets', createTweet);
    app.get('/rest/tweets', findAllTweets);
};