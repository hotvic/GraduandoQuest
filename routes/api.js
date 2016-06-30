var express = require('express');
var router = express.Router();

/* API */
router.post('/auth/:method', function(req, res, next) {
    if (req.params['method'] == 'login') {
        res.send({success: true});
    }
});

module.exports = router;