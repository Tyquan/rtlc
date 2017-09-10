var express = require('express');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var html2jade = require('html2jade');
const Course = require('../models/course');
const Project = require('../models/project');

var router = express.Router();

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