var express = require('express');
var router = express.Router();
const sony = require("../controllers/sony");
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.get('/sony', sony);


module.exports = router;
