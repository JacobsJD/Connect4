const models = require('../models');

module.exports = {

    gameData: {
        get: function (req, res) {
        models.gameData.get(function(err, results) {
            if (err) { console.log('err in models get') }
            console.log(results)
            res.json(results);
        });
        },
        post: function (req, res) {
        let params = [req.body.ID, req.body.board, req.body.redVictories, req.body.blueVictories];
        console.log('Parms in controllers: ', params)
            models.gameData.post(params, function(err, results) {
                if (err) { console.log('err in post') }
                console.log(results)
                res.sendStatus(201);
            });
        }
    }
};