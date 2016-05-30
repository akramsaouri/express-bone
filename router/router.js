var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller');
var db = require('../db/db');

router.get('/', controller.index);

module.exports = router;
