var express = require('express');

var Bear = require('./models/bear');
   
var router = express.Router();

router.route('/bears') 
    .post( (req, res) => {
        if (!req.body.name) {
            res.json( {message: 'No name supplied!' });
        } else {
            var bear = new Bear();
            bear.name = req.body.name;
            bear.save( (err) => {
                if (err) res.send(err);
                var msg = "Bear '" + bear.name + "' created!";
                res.json( {message: msg} );
            })
        }
    })
    .get( (req, res) => {
        Bear.find( (err, bears) => {
            if (err) res.send(err);
            res.json(bears);
        });
    });

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the api!' });
});

router.use( (req, res, next) => {
    console.log('Middleware');
    next();
});

module.exports = router;
