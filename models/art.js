var mongoose = require('mongoose');

var artSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String
    },
    category: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
    
});

var Art = mongoose.model('Art', artSchema);

module.exports = Art;