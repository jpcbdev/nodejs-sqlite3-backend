module.exports = app => {
    const userModel = app.db.models.users;
    app
        .get('/users', (req, res) => {
            userModel.findAll({})
                .then(result => res.json(result).status(200).end())
                .catch(() => res.status(404).end());
        })
        .get('/users/:id', (req, res) => {
            const cond = req.params;
            userModel.findOne({
                    where: cond
                })
                .then(result => res.json(result).status(200).end())
                .catch(() => res.status(404).end())
        })
        .post('/users', (req, res) => {
            const body = req.body;
            userModel.create(body)
                .then(() => res.status(200).end())
                .catch(() => res.status(404).end());
        })
        .put('/users/:id', (req, res) => {
            const cond = req.params;
            const update = req.body;
            userModel.update(update, {
                    where: cond
                })
                .then(() => res.status(200).end())
                .catch(() => res.status(404).end());
        })
        .delete('/users/:id', (req, res) => {
            const cond = req.params;
            userModel.destroy({
                    where: cond
                })
                .then(() => res.status(200).end())
                .catch(() => res.status(404).end());
        })

}