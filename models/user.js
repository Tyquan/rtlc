var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    city: String,
    state: String,
    admin: {
        type: Boolean,
        default: false
    },
    username: String,
    password: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;