var express = require('express');
var router = express.Router();
const sony = require("../controllers/sony");


router.get('/sony', sony);

module.exports = router;
