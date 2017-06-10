#!/usr/bin/env nodejs
var express = require('express');
var favicon = require('serve-favicon'); 
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Bear = require('./app/models/bear');

var app = express();

var router = express.Router();

router.use( (req, res, next) => {
	console.log('Middleware');
	next();
});

router.route('/bears')
	
	.post( (req, res) => {
		var bear = new Bear();
		bear.name = req.body.name;
		bear.save( (err) => {
			if (err) res.send(err);

			res.json( {message: 'Bear created!' });
		});
	})
	.get( (req, res) => {
		Bear.find( (err, bears) => {
			if (err) res.send(err);
			res.json(bears);
		});
	});

router.get('/', (req, res) => {
	res.json({ message: 'hello, world' });
});

mongoose.connect('mongodb://test:mowgli11@ds059365.mlab.com:59365/noahrinehart');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(favicon(path.join(__dirname, 'public/assets/images/favicon.ico')));
//app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8080;

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api', router);

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT  + '!');
});
