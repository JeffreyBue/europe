var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', images: req.images, set: 1, perPage: 25 });
});

router.get('/:set/', function(req, res, next) {
	if(typeof parseInt(req.params.set) == 'number' ) {
  		res.render('index', { title: 'Express', images: req.images, set: req.params.set, perPage: 25 });
  	}else {
	  var err = new Error('Not Found');
	  err.status = 404;
	  next(err);
  	}
});

module.exports = router;
