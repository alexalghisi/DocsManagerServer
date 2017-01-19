/**
 * Created by alessandro on 18.01.2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id : Number,
    user: String,
    title: String,
    text: String,
    version: Number
});

var Doc = mongoose.model('Doc', userSchema);
module.exports = Doc;
