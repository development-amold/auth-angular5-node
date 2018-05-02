var express = require('express');
var expressListRoutes   = require('express-list-routes');
var router = express.Router();
var jwt = require('express-jwt');

//to make sure that only authenticated users can access the /api/profile route. The way to validate a request is to ensure that the JWT sent with it is genuine, by using the secret again.
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
const ctrlAuth = require('../controllers/authentication');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);

router.post('/login', ctrlAuth.login);

// console.log(expressListRoutes( router )) 

module.exports = router;