"use strict"

let request = require('supertest-as-promised');
const api = require('../app');
const host = api;

request = request( host );

describe( 'la ruta de agendaciones', function(){
	describe('agendacion', function(){
		it('deberia enviar correo', function( done ){
			let agenda = {
				clientName : 'eduardo',
				address : 'tlacoyaque',
				phone : '55 5555 5555',
				email : 'worldjiz@hotmail.com',
				service : 'plomeria',
				date : '2016-12-12' 				
			}

			request
				.post('/agendar')
				.set('Accept', 'application/json')
				.send( agenda )
				.expect( 201 )
				.expect('Content-Type', /application\/json/)
				.end(( err, res ) => {
					let body = res.body;
					expect(body).to.have.property('agenda')
					agenda = body.agenda;
					expect(body).to.have.property('clientName', 'eduardo');
					expect(body).to.have.property('address', 'tlacoyaque');
					expect(body).to.have.property('phone', '55 5555 5555');

					done(err);
				})
		});
	})
} );