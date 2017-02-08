var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nick Boyd' });
});

/* GET portfolio page. */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Nick Boyd', subtitle: 'Portfolio' });
});

/* GET profile page */
router.get('/profile', function(req, res, next){
  res.render('profile', {title: 'Nick Boyd', subtitle: 'Profile'});
});

/* GET contact page */
router.get('/contact', function(req, res, next){
  res.render('contact', {title: 'Nick Boyd', subtitle: 'Contact'});
});

module.exports = router;
