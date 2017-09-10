var express = require('express');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var router = express.Router();

/* GET Login Page. */
router.get('/', (req, res, next)=> {
    res.render('login');
});

/* Log user in */
router.post('/', (req, res, next) => {
    // find the user
    User.findOne({
        username: req.body.username
    }, (err, user) => {
        if (err) {
            throw err;
        } else {
            if (!user) {
                console.log('User not in the databases');
                res.json({success: false, message: 'User not in the databases'});
            } else {
                // check the password
                if (user.password != req.body.password) {
                    console.log('Wrong Password');
                    res.json({success: false, message: 'Wrong Password'});
                } else {
                    // if user is found and password is right
                    // create a token
                    console.log('User Found');
                    var token = jwt.sign(user, 'reddictechlearningcenter', {
                      expiresIn : 60*60*24 // expires in 24 hours
                    });
                    // If user is not an admin
                    if (user.admin != true) {
                      // return the information including token as JSON and send dto dashboard
                      res.render('dashboard', {
                        user,
                        success: true,
                        message: 'New Token Created',
                        token: token
                      });
                    } else {
                      // If user is an admin
                      res.render('allusers', {
                        user,
                        success: true,
                        message: 'New Token Created',
                        token: token
                      });
                    }
                }
            }
        }
    });
});

module.exports = router;