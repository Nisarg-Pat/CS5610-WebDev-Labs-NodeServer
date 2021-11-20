let tweets = require('../data/tweets.json');

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        res.json(tweets);
    }

    app.get('/api/tweets', findAllTweets);

    const postNewTweet = (req, res) => {
        tweets = [
            req.body,
            ...tweets
        ];
        res.json(req.body);
    }

    app.post('/api/tweets', postNewTweet);

    const deleteTweet = (req, res) => {
        const id = parseInt(req.params['id']);
        console.log(id);
        tweets = tweets.filter(tweet => tweet._id !== id);
        console.log(tweets);
        res.sendStatus(200);
    }
    app.delete('/api/tweets/:id', deleteTweet);

    const likeTweet = (req, res) => {
        const id = parseInt(req.params['id']);
        tweets = tweets.map(tweet => {
            if (tweet._id === id) {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.like--;
                } else {
                    tweet.liked = true;
                    tweet.like++;
                }
                return tweet;
            } else {
                return tweet;
            }
        });
        res.sendStatus(200);
    }
    app.put('/api/tweets/:id/like', likeTweet);
};
