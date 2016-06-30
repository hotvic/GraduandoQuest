var express = require('express');
var router = express.Router();

/* GET components. */
router.get('/:component', function(req, res, next) {
    res.render(req.params['component']);
});

module.exports = router;
