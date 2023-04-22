"use strict";
var express = require('express');
var router = express.Router();
var configuracinServicio = require('../services/seriesnumeracion');
/* GET users listing. */
router.get('/seriesnumeracion', function (req, res, next) {
    res.send(configuracinServicio.mensaje());
});
module.exports = router;
