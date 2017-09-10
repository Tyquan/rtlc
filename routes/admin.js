var express = require('express');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var Course = require('../models/course');
var Project = require('../models/project');
var Message = require('../models/message');
var craigslistparser = require('craigslistparser');
var router = express.Router();

// render Dashboard page
router.get('/dashboard', (req, res, next) => {
    res.render('admin/dashboard', {
        title: 'Admin Dashbard Page'
    });
});

/* Users Routes */
router.get('/allusers', (req, res, next) => {
    User.find({}, (err, data) => {
        if (err) throw err;
        else {
            res.render('admin/users/allusers', {users: data});
        }
    });
});
router.get('/showuser/:id', (req, res, next) => {
    User.findById(req.params.id, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('admin/users/showuser', {
                user: data
            });
        }
    });
});
router.get('/createuser', (req, res, next) => {
    res.render('admin/users/createuser');
});
router.post('/createuser', (req, res, next) => {
    var user = new User(req.body);
    user.save((err, data) => {
        if (err) {
            throw err;
        } else {
            res.redirect('allusers');
        }
    });
});



/* Course Routes */
router.get('/allcourses', (req, res, next) => {
    Course.find({}, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('admin/courses/courses', {
                courses: data
            });
        }
    });
});
router.get('/createcourse', (req, res, next) => {
    res.render('admin/courses/createcourse');
});
router.post('/createcourse', (req, res, next) => {
    var course = new Course(req.body);
    course.save((err, data) => {
        if (err) {
            throw err;
        } else {
            res.redirect('allcourses');
        }
    });
});
router.get('/showcourse/:id', (req, res, next) => {
    Course.findById(req.params.id, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('admin/courses/showcourse', {
                course: data
            });
        }
    });
});

/* Project Routes */
router.get('/allprojects', (req, res, next) => {
    Project.find({}, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('admin/projects/projects', {
                projects: data
            });
        }
    });
});
router.get('/createproject', (req, res, next) => {
    res.render('admin/projects/createproject');
});
router.post('/createproject', (req, res, next) => {
    var project = new Project(req.body);
    project.save((err, data) => {
        if (err) {
            throw err;
        } else {
            res.redirect('allprojects');
        }
    });
});

/* Message Routes */
router.get('/incomingmessages', (req, res, next) => {
    Message.find({}, (err, messages) => {
        if (err) {
            throw err;
        } else {
            res.render('admin/messages/incomingmessages', {
                messages: messages
            });
        }
    });
});
router.get('/showmessage/:id', (req, res, next) => {
    Message.findById(req.params.id, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('admin/messages/showmessage', {
                user: data
            });
        }
    });
});

router.get('/email/:id', (req, res) => {
    Message.findById(req.params.id, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('admin/email/showemail', {
                user: data
            });
        }
    });
});
 
// render office page
router.get('/office', (req, res, next) => {
    User.find({}, (err, users) => {
        if (err) {
            throw err;
        } else {
            res.render('admin/office', {users: users});
        }
    });
});

module.exports = router;