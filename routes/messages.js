var express = require('express');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var User = require('../models/user');
var Course = require('../models/course');
var Project = require('../models/project');
var Message = require('../models/message');
var router = express.Router();

/* Contact form */
router.get('/contact', (req, res, next) => {
    res.render('static/contact');
});
router.post('/contactform', (req, res, next) => {
    var message = new Message(req.body);
    // var transport = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 'youremail@address.com',
    //         pass: 'yourpassword'
    //     }
    // });
    message.save((err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('static/contact', {
                messages: data,
                trunks: 'Message has be successfully sent! I will email you shortly'
            });
        }
    });
});


module.exports = router;