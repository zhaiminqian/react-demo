var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const json = {
    list:[
      'jolin',
      'lily',
      'jie'
    ]
  }
  res.send(json)
  res.end()
});

module.exports = router;
