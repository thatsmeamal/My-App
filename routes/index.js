var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

router.get('/payload', function(req, res, next) {
  console.log("Successfully handled a GET request");
});

router.post('/payload', function(req, res, next) {
  console.log("Successfully handled a POST request");
});

module.exports = router;
