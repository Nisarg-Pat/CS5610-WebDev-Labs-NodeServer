const dao = require('./profile-dao');
module.exports = (app) => {
    const findProfileById = (req, res) => {
        dao.findProfileById('61a02bd259c27f1fa37d274c').then((profile) => res.json(profile));
    }

    const updateProfile = (req, res) => {
        dao.updateProfile(req.params.id, req.body).then((status) => res.send(status))
    }

    app.get('/rest/profiles/', findProfileById);
    app.put('/rest/profiles/:id', updateProfile)
}