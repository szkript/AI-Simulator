const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
    let msg = 'nani';
    // res.send('<h1>Hello world</h1>');
    res.render('chat', {
        title: 'chat',
        result: msg,
    });
});

module.exports = router;