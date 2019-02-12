module.exports = app => {
    const messageModel = app.db.models.messages;
    app
        .get('/messages', (req, res) => {

            messageModel.findAll({})
                .then(result => res.json(result).status(200).end())
                .catch(() => res.status(412).end())
        })
        .get('/messages/:id', (req, res) => {
            const cond = req.params;
            messageModel.findOne({
                    where: cond
                })
                .then(result => res.json(result).status(200).end())
                .catch(() => res.status(404).end())
        })
        .post('/messages', (req, res) => {
            const body = req.body;
            const messageModel = app.db.models.messages;
            messageModel.create(body)
                .then(() => res.status(200).end())
                .catch(() => res.status(404).end())
        })
        .put('/messages/:id', (req, res) => {
            const cond = req.params;
            const update = req.body;

            messageModel.update(update, {
                    where: cond
                })
                .then(() => res.status(200).end())
                .catch(() => res.status(404).end());
        })
        .delete('/messages/:id', (req, res) => {

            const cond = req.params;
            messageModel.destroy({
                    where: cond
                })
                .then(() => res.status(200).end())
                .catch(() => res.status(404).end());
        })
}

// recordar que los id son id_message y id_user
// el body del postman estaba mal
// messages estaba mal escrito en el metodo delete