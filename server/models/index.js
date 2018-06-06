const db = require('../db');

module.exports = {

    gameData: {
        get: function (callback) {
        // fetch all messages
        // text, username, roomname, id
        let queryStr = 'select gameData.board, gameData.redVictories, gameData.blueVictories\
                        from gameData';
        db.query(queryStr, function(err, results) {
            callback(err, results);
        });
        },
        post: function (params, callback) {
        // create a message for a user id based on the given username
        let queryStr = "UPDATE gameData SET board='"+params[1]+"', redVictories="+params[2]+", blueVictories="+params[3]+";"
        console.log(queryStr)
        db.query(queryStr, params, function(err, results) {
            callback(err, results);
        });
        }
    }
};
