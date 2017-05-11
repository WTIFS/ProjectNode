var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
	res.send("<h1>hello Express!</h1>");
})

router.get('/:user', function(req, res, next) {
	var user = req.params.user;
  	res.render('index.html', { title: user });
});

module.exports = router;


