const mysql = require('mysql');


const connection = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'connect4'
});

connection.connect();

module.exports = connection;