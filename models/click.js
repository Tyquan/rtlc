var mongoose = require('mongoose');

var clickSchema = mongoose.Schema({
    page: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now
    }
    
});

var Click = mongoose.model('Click', clickSchema);

module.exports = Click;