//Comments are for all things pertaining to the database
const express = require('express');
const parser = require('body-parser');
const path = require('path');

//Database setup
const db = require('./db');
const router = require('./routes.js');

const PORT = 1337;
const app = express();
//Export the app
module.exports.app = app;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

//Add router
app.use('/api', router);
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.listen(PORT, (err) => {
    err? console.log('Issue starting server') : console.log('Listening on ', PORT);
});
