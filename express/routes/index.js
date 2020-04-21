const {VALID_PASSWORD, VALID_USERNAME} = require("./constants");

var express = require('express');
var router = express.Router();

router.post('/login', function (req, res, next) {
    const {username, password} = req.body;
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        res.status(200);
        res.send({message: 'Login successful!'});
    } else {
        res.status(403);
        res.send({message: 'Error: invalid credentials.'});
    }
});

router.get('/user-data', function (req, res, next) {
    res.send({
        username: VALID_USERNAME,
        date: new Date().toLocaleString(),
        currentWorkingDirectory: __dirname
    });
});

module.exports = router;
