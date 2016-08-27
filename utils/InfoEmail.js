const stampit = require('stampit');

const InfoEmail = stampit().init(function(){
	const email = 'envioswhileapp';
	const pass = '1secret2';
	const uri = 'smtps://' + email + '%40gmail.com:' + pass + '@smtp.gmail.com';

	this.getUri = () => uri;
});

module.exports = InfoEmail;