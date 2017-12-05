var express = require('express');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var router = express.Router();

/* GET Login Page. */
router.get('/login', (req, res, next)=> {
    res.render('login');
});

/* Log user in */
router.post('/login', (req, res, next) => {
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
                    console.log('User Found');
                    console.log();
                    req.session.user = user;
                    res.render('admin/dashboard');
                }
            }
        }
    });
});

module.exports = router;