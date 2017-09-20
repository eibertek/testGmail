import { Router } from 'express';
import path from 'path';
import { version } from '../../package.json';
const sendMail =  require('gmail-send');
export default ({ config }) => {
	let routes = Router();

	// add middleware here
  routes.get('/', (req, res) => {
			res.sendFile(path.join(__dirname + './../views/index.html'));
  });
	
		// add middleware here
	routes.post('/send', (req, res) => {

			// Override any default option and send email 
			
			console.log('* [example 1.1] sending test email');

			var filepath = './demo-attachment.txt';  // File to attach 

			sendMail({ // Overriding default parameters 
				user: 'mariano.eiberman@intive-fdv.com',
				pass: 'Agosto2017$',
				to:   'mariano.eiberman@intive-fdv.com',
				subject: 'attached ',         // Override value set as default 
				//files: [ filepath ],
				}, function (err, res) {
					console.log('* [example 1.1] send() callback returned: err:', err, '; res:', res);
					return res.json.send({'result':res});
			});
  });
  
  	   routes.get('/template', (req, res) => {
			// aca tengo que traer los que cumplen años hoy y mostrarlos en un html ooooo levantar directamente un reactapp 
			res.sendFile(path.join(__dirname + './../views/index.html'));
	  });
	return routes;
}