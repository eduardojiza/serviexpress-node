"use strict"

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.status(200).json({message:'hola mundo'});
});

module.exports = router;
