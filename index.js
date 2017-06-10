#!/usr/bin/env nodejs
var express = require('express');
var favicon = require('serve-favicon'); 
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Bear = require('./app/models/bear');
var router = require('./app/routes');

const PORT = process.env.PORT || 8080;

var app = express();

// Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: true }));

// Set up static files in /public
// app.use(express.static(path.join(__drrname + '/public')));

// Server static website
app.use('/', express.static(path.join(__dirname, 'public')));

// Set up favicon
app.use(favicon(path.join(__dirname, 'public/assets/images/favicon.ico')));

// Config routes
app.use('/api', router);

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT  + '!');
});

module.exports = app;

mongoose.connect('mongodb://test:mowgli11@ds059365.mlab.com:59365/noahrinehart');



