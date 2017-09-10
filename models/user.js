var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    role: String,
    city: String,
    state: String,
    phone: String,
    admin: {
        type: Boolean,
        default: false
    },
    username: String,
    password: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;