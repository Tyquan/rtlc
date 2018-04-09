var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    inquiry: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now
    }
    
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;