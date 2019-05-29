var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(123456)
  const json = {
    name: '123'
  }
  res.send(json)
  res.end()
});

module.exports = router;
