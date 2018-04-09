var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    prerequisites: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    lessons: {
        type: String,
        required: true
    }
    
});

var Course = mongoose.model('Course', courseSchema);

module.exports = Course;