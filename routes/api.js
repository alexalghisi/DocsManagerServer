var express = require('express');
var user = require('../app/api/userAPI');
var docs = require('../app/api/docsAPI')
var router = express.Router();

/* GET home page. */
router.get('/auth/session', function(req, res, next) {
  res.send("Hello");
});

/* POST log in. */
router.post('/auth/session', user.findUserGetToken);

/* POST get docs. */
router.get('/docs', docs.findDocs);
/* GET doc details. */
router.get('/docs/:docID', docs.findDoc);

router.post('/docs/add', docs.addDoc);


module.exports = router;
