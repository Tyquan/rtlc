var express = require('express');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
const Service = require('../models/service');
const Blog = require('../models/blog');
const Course = require('../models/course');
const Project = require('../models/project');

var router = express.Router();

/*
    Services Routes
*/
router.get('/allservices', (req, res, next) => {
    Service.find({}, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('static/services', {
                services: data
            });
        }
    });
});
router.get('/showservice/:id', (req, res, next) => {
    Service.findById(req.params.id, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('static/showservice', {
                service: data
            });
        }
    });
});

/*
    Blog Routes
*/
router.get('/allblogs', (req, res, next) => {
    Blog.find({}).sort({date_created: -1}).exec((err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('static/blogs', {
                blogs: data
            });
        }
    });
});
router.get('/showblog/:id', (req, res, next) => {
    Blog.findById(req.params.id, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('static/showblog', {
                blog: data
            });
        }
    });
});

/*
    Courses Routes
*/
router.get('/allcourses', (req, res, next) => {
    Course.find({}, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('static/courses', {
                courses: data
            });
        }
    });
});
router.get('/showcourse/:id', (req, res, next) => {
    Course.findById(req.params.id, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('static/showcourse', {
                course: data
            });
        }
    });
});

router.get('/allprojects', (req, res, next) => {
    Project.find({}, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('static/projects', {
                projects: data
            });
        }
    });
});

module.exports = router;