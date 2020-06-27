const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
    res.render('gameLobby', {
        title: 'gameLobby',
    });
});

module.exports = router;