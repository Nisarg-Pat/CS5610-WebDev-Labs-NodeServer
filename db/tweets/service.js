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
        dao.updateTweet(req.params.id, {liked: req.params.like})
            .then((status) => res.send(status));
    }

    app.put('/rest/tweets/:id/like', likeTweet);
    app.delete('/rest/tweets/:id', deleteTweet);
    app.post('/rest/tweets', createTweet);
    app.get('/rest/tweets', findAllTweets);
};