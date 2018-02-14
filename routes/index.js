var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/process_get', function (req, res) {
  var content = fs.readFileSync("data/dogs.json");
  var jsonContent = JSON.parse(content);
  // Prepare output in JSON format
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.end(JSON.stringify(jsonContent));
});

module.exports = router;
