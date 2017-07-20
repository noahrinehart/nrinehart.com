#!/usr/bin/env nodejs
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var app = express();

const port = 8080;

app.use(favicon(path.join(__dirname, './static/images/favicon.ico')));
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log('Listening on ' + port);
});
