var express = require('express');
var router = express.Router();

router.get('/getContactUs', function(req, res, next) {
    var result = {};
    result.from = "Tonman";
    result.subject = "Tonmannaja";
    result.message = "TonmanMessage";
    res.send(result);
});

router.post('/setContactUs', function(req, res, next) {
    var result = {};
    result.from = req.body.from;
    result.subject = req.body.subject;
    result.message = req.body.message;
    console.log(result);
    res.send("GOOD");
});

module.exports = router;
