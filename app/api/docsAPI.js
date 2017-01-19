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
    console.log("Looking for doc ID:", docID);
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


exports.addDoc = function(req, res) {
    var doc = new Docs({
       title : req.body.title,
       text: req.body.text,
       version: req.body.version,
       user: req.body.user,
       _id: Math.floor(Math.random() * (300 - 10) + 10)
    });
    console.log(doc);
    doc.save(function (err) {
        if(err) {
            console.log("Doc not saved!");
            res.status(404).send({});
        } else {
            console.log("Doc saved!");
            res.status(200).send(JSON.stringify(doc));
        }
    });
};