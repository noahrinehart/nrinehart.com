#!/usr/bin/env nodejs
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');

var app = express();

const PORT = 8080;

app.use(favicon(path.join(__dirname, 'public/assets/images/favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT  + '!');
});
