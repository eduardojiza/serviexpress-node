const stampit = require('stampit');
const nodemailer = require('nodemailer');

const SendEmailService = stampit().init(function(){
	const toSend = 'worldjiz@hotmail.com';
	this.getTemplateServicio = ( info ) => { return '<h1>Solicitud de servicio</h1>' +
								'<h2>De: ' + info.clientName + '<h2>' +
								'<h3>Datos</h3>' +
								'<p><strong>Direccion:</strong> ' + info.address + '</p>' + 
								'<p><strong>Telefono:</strong> ' + info.phone + '</p>' + 
								'<p><strong>Email:</strong> ' + info.email + '</p>' + 
								'<p><strong>Servicio:</strong> ' + info.service + '</p>' + 
								'<p><strong>Fecha:</strong> ' + info.date + '</p>'
							};
	
	this.getTemplateContacto = ( info ) => { return '<h1>Solicitud de contacto</h1>' +
								'<h2>De: ' + info.contactName + '<h2>' +
								'<h3>Datos</h3>' +
								'<p><strong>Telefono:</strong> ' + info.contactPhone + '</p>' + 
								'<p><strong>email:</strong> ' + info.contactEmail + '</p>' + 
								'<p><strong>Mensaje:</strong> ' + info.contactText + '</p>'
							};	

	//just sent from email gmail
	this.sendEmail = ( uri, data, opt, funOK, funcError ) => {
		// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport( uri );
		// setup e-mail data with unicode symbols
		// 
		let mailOptions;
		if( opt === 'servicio'){
			mailOptions = {
			    from: '"Envíos while 👥" <envioswhileapp@gmail.com>', // sender address
			    to: toSend, // list of receivers
			    subject: 'Solicitud de servicio', // Subject line
			    html: this.getTemplateServicio( data )// html body
			};			
		} else {
			mailOptions = {
			    from: '"Envíos while 👥" <envioswhileapp@gmail.com>', // sender address
			    to: toSend, // list of receivers
			    subject: 'Solicitud de contacto', // Subject line
			    html: this.getTemplateContacto( data )// html body
			};				
		}

		console.log(JSON.stringify(mailOptions));

		// send mail with defined transport object
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        funcError();
		    }
		    funOK();		
		});
	}							

});

module.exports = SendEmailService;