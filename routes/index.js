var express = require('express');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var router = express.Router();
var Course = require('../models/course');
var Project = require('../models/project');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
      titleMain: 'Tyquan Reddick',
      titleAbbrev: 'T.R'
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

module.exports = router;