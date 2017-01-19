/**
 * Created by alessandro on 18.01.2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String,
    token: String
});

var User = mongoose.model('User', userSchema);
module.exports = User;
