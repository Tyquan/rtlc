var express = require('express');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
      titleMain: 'Reddicktech Learning Center',
      titleAbbrev: 'RTLC'
  });
});

/* GET signup Page. */
router.get('/signup', (req, res, next)=> {
    res.render('signup');
});

/* GET Logout Page. */
router.get('/logout', (req, res, next)=> {
    res.send('Logout Activated');
});

/* Setup the db with me as the initial user. */
router.get('/setupdb', (req, res, next) => {
    // create a sample user
      var ty = new User({ 
        name: 'Tyquan Reddick',
        username: 'tjreddick@gmail.com',
        password: 'admin',
        course: 'master',
        role: 'admin',
        admin: true 
      });
      ty.save((err, data)=>{
          if (err) {
              throw err;
          } else {
              console.log('Tyquan successfully saved');
              res.json({success: true});
          }
      });
});

module.exports = router;
