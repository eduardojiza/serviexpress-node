"use strict"

var express = require('express');
const InfoEmail = require('../utils/InfoEmail.js');
const SendEmailService = require('../utils/SendEmailService.js');

var router = express.Router();
const infoEmail = InfoEmail();
const sendEmailService = SendEmailService();


router.post('/', function( req, res, next ){
	console.log( req.body );
	if( !req.body ){
		res.status(403).json( {error: true, message:'Peticion empty'} );
	}

	let _body = req.body;
	sendEmailService.sendEmail(infoEmail.getUri(), _body, 'servicio', 
	function(){
		res.status(201).json( { servicio: _body });
	}, 
	function(){
		res.status(201).json( { error: true });
	})
		
});

module.exports = router;