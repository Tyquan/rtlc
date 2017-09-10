var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    linkUrl: {
        type: String,
        required: true
    }
    
});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;