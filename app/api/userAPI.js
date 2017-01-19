/**
 * Created by alessandro on 18.01.2017.
 */
var User = require('../models/user');

exports.findUserGetToken = function(req, res) {
    console.log(req.body);
    User.findOne({ username: req.body.username, password: req.body.password }, function(err, found) {
        if (err || found === null) {
            console.log("User not found!");
            res.status(401).send({});
        }
        else {
            console.log("Found user with token:", (found.token));
            res.status(201).send(JSON.stringify({token : found.token}));
        }
    });
};