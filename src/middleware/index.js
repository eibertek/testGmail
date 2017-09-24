import { Router } from 'express';
import path from 'path';
import fetch from 'isomorphic-fetch';
import moment from 'moment';
import { version } from '../../package.json';

const sendMail =  require('gmail-send');
export default ({ config }) => {
	let routes = Router();

	routes.get('/template', (req, res) => {
		// aca tengo que traer los que cumplen años hoy y mostrarlos en un html ooooo levantar directamente un reactapp 
		let today = new moment();
		fetch('http://localhost:3000/employees')
		.then(function(response){
				return response.json();
		})
		.then(function(json){
				const employees = json.filter((employee)=>{
					const birthday = moment(employee.birthday, 'DD/MM/YYYY');
					return (birthday.date() === today.date() && birthday.month() === today.month());
				});
				return res.render('template_birthdays', {data:employees});				
		});
  });

  routes.get('/', (req, res) => {
			return res.sendFile(path.join(__dirname + './../views/index.html'));
  });
	
	return routes;
}