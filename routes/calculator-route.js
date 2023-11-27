var express = require('express');
var router = express.Router();
var { add, subtract } = require('../calculator/calculator.js');

router.post('/add', function(req, res, next) {
  res.json({result: add(req.body.x, req.body.y)});
});

router.post('/subtract', function(req, res, next) {
  res.json({result: subtract(req.body.x, req.body.y)});
});

module.exports = router;
