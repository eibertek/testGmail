import { Router } from 'express';
import path from 'path';
import fetch from 'isomorphic-fetch';
import { version } from '../../package.json';

const sendMail =  require('gmail-send');
export default ({ config }) => {
	let routes = Router();

	routes.get('/template', (req, res) => {
		// aca tengo que traer los que cumplen años hoy y mostrarlos en un html ooooo levantar directamente un reactapp 
		let today = new Date();
		let todayString = today.getDate().toString()+'/'+ (today.getMonth() < 10 ? '0':'') + (today.getMonth()+1).toString();
		console.log(todayString);
		fetch('http://localhost:3000/employees?birthday='+'05/12')
		.then(function(response){
				return response.json();
		})
		.then(function(json){
			console.log(json);
				return res.render('template_birthdays', {data:json});				
		});

  });

  routes.get('/', (req, res) => {
			return res.sendFile(path.join(__dirname + './../views/index.html'));
  });
	
	return routes;
}