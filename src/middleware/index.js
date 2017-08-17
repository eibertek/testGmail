import { Router } from 'express';
import path from 'path';
import { version } from '../../package.json';

export default ({ config }) => {
	let routes = Router();

	// add middleware here
  routes.get('/', (req, res) => {
			res.sendFile(path.join(__dirname + './../views/index.html'));
  });
  
	return routes;
}