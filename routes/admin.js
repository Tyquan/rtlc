var express = require('express');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
const Service = require('../models/service');
const Blog = require('../models/blog');
var Course = require('../models/course');
var Project = require('../models/project');
var Message = require('../models/message');
var router = express.Router();

// render Dashboard page
router.get('/dashboard', (req, res, next) => {
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
    Service.find({}).sort({date_created: -1}).limit(5).exec((err, data)=>{
        if (err) {
            throw err;
        } else {
            console.log(data);
            Blog.find({}).sort({date_created: -1}).limit(5).exec((err, blog)=>{
                if (err) {
                    throw err;
                } else {
                    Course.find({}).sort({date_created: -1}).limit(5).exec((err, course)=>{
                        if (err) {
                            throw err;
                        } else {
                            Project.find({}).sort({date_created: -1}).limit(5).exec((err, project)=>{
                                if (err) {
                                    throw err;
                                } else {
                                    Message.find({}).sort({date_created: -1}).limit(5).exec((err, message)=>{
                                        if (err) {
                                            throw err;
                                        } else {
                                            res.render('admin/dashboard', {
                                                title: 'Admin Dashbard Page',
                                                services: data,
                                                blogs: blog,
                                                courses: course,
                                                projects: project,
                                                messages: message
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});

/* Users Routes */
router.get('/allusers', (req, res, next) => {
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
    User.find({}, (err, data) => {
        if (err) throw err;
        else {
            res.render('admin/users/allusers', { users: data });
        }
    });
});
router.get('/showuser/:id', (req, res, next) => {
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
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
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
    res.render('admin/users/createuser');
});
router.post('/createuser', (req, res, next) => {
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
    var user = new User(req.body);
    user.save((err, data) => {
        if (err) {
            throw err;
        } else {
            res.redirect('allusers');
        }
    });
});

/*
    Services Routes
*/
router.get('/allservices', (req, res, next) => {
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
    Service.find({}, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('admin/services/services', {
                services: data
            });
        }
    });
});
router.get('/createservice', (req, res, next) => {
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
    res.render('admin/services/createservice');
});
router.post('/createservice', (req, res, next) => {
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
    let service = new Service(req.body);
    service.save().then((data) => {
        res.redirect('allservices');
    }).catch((err) => {
        throw err;
    });
});
router.get('/showservice/:id', (req, res, next) => {
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
    Service.findById(req.params.id, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('admin/services/showservice', {
                service: data
            });
        }
    });
});

/*
    Blogs Routes
*/
router.get('/allblogs', (req, res, next) => {
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
    Blog.find({}, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('admin/blogs/blogs', {
                blogs: data
            });
        }
    });
});
router.get('/createblog', (req, res, next) => {
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
    res.render('admin/blogs/createblog');
});
router.post('/createblog', (req, res, next) => {
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
    let blog = new Blog(req.body);
    blog.save().then((data) => {
        res.redirect('allblogs');
    }).catch((err) => {
        throw err;
    });
});
router.get('/showblog/:id', (req, res, next) => {
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
    Blog.findById(req.params.id, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render('admin/blogs/showblog', {
                blog: data
            });
        }
    });
});


/* Course Routes */
router.get('/allcourses', (req, res, next) => {
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
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
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
    res.render('admin/courses/createcourse');
});
router.post('/createcourse', (req, res, next) => {
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
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
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
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
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
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
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
    res.render('admin/projects/createproject');
});
router.post('/createproject', (req, res, next) => {
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
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
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
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
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
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
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
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
    if (!req.session.user) {
        return res.status(400).send("You have to be logged in to view this section");
    }
    User.find({}, (err, users) => {
        if (err) {
            throw err;
        } else {
            res.render('admin/office', { users: users });
        }
    });
});

module.exports = router;