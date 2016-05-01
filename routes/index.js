var express = require('express');
var router = express.Router();
var app = express();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Out and About' });
  // res.send('I am the gate keeper!');
});

// GET user's page
router.get('/user', function(req, res, next){
  res.send('User Personal Page/Favorites!');
});

// GET Login page
router.get('/login', function(req, res, next){
  res.send('This is the login Page!');
});

// app.route('/login')
//   .get(function(req, res){
//     res.send('this is the fucking login form');
// })
//   .post(function(req, res){
//     console.log('processing');
//     res.send('processing the login form');
// });

// GET register page
router.get('/register', function(req, res, next){
  res.send('This is the register Page!');
});

// multiple locations
router.get('/search', function(req, res, next){
  res.send('Search Multiple Locations page');
});

// Single Location Page
router.get('/location', function(req, res, next){
  res.send('This is the login Page!');
});

// add location
router.get('/add', function(req, res, next){
  res.send('Add Location!');
});

// add personal info
router.get('/edit', function(req, res, next){
  res.send('Edit personal info screen!');
});


// don't know how to access this
app.use('/admin', router);


module.exports = router;
