"use strict"
let request  = require( 'supertest-as-promised' );
const api = require('../app');
const host = api;

request = request(host);


describe('ruta indice', function(){
	describe('GET /', function(){
		it('DEBERIA EJECUTAR HOLA MUNDO', function( done ){
			request
				.get('/')
				.set('Accept', 'application/json')
				.expect(200)
				.expect('Content-Type', /application\/json/)
				.end( (err, res) => {
					let body = res.body;
					expect(body).to.have.property( 'message', 'hola mundo' );
					done(err);
				} );
		});
	});
});