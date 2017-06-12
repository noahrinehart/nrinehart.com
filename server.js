#!/usr/bin/env nodejs
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
require('dotenv').config();

var app = express();

const port = process.env.PORT;

app.use(favicon(path.join(__dirname, './static/images/favicon.ico')));
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log('Listening on ' + port);
});
