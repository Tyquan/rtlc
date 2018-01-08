const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../models/blog');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	Blog.find({}).limit(1).sort({date_created: -1}).exec((err, doc) => {
		if (err) {
			console.log(err);
			throw err;
		} else {
			console.log(doc);
			res.render('index', { 
			    titleMain: 'Tyquan Reddick',
			    titleAbbrev: 'T.R',
			    blog: doc
			});
		}
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