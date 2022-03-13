var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Menu' });
});

router.get('/solo', function(req, res, next) {
  let q = req.query.type
  if (q) {
    res.render('chess', { title: 'Duo Local', type: q });
  } else {
    next();
  }
});

module.exports = router;
