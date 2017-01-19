/**
 * Created by alessandro on 18.01.2017.
 */
var Docs = require('../models/doc');

exports.findDocs = function(req, res) {
    console.log("Req:", req.body);

    Docs.find({}, function(err, found) {
        if (err || found === null) {
            console.log("Docs not found!");
            res.status(401).send({});
        }
        else {
            console.log("Found docs:", found);
            res.status(200).send(JSON.stringify(found));
        }
    });
};

exports.findDoc = function(req, res) {
    var  docID = req.params.docID;
    Docs.findOne({ _id : docID }, function(err, found) {
        if (err || found === null) {
            console.log("Doc not found!");
            res.status(404).send({});
        }
        else {
            console.log("Found doc:", found);
            res.status(200).send(JSON.stringify(found));
        }

    })
};