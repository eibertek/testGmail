import { Router } from 'express';
import { version } from '../../package.json';

export default ({ config }) => {
	let routes = Router();

	// add middleware here
  routes.get('/', (req, res) => {
		res.json({ version });
  });
  
	return routes;
}