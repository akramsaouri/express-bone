var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller');

router.get('/', controller.index);

module.exports = router;
