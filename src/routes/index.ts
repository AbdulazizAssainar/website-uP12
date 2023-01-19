import express, { Request, Response } from 'express';
import { pagesPath } from '../utilities/paths';
import olymp from './api/olymp-trade';

const routes: express.Application = express();

routes.get('/', function (req: Request, res: Response) {
  res.sendFile(pagesPath + '/index.html');
});

routes.use('/olymp', olymp);

routes.get('/pages/style/index.css', (req, res) => {
  res.sendFile(pagesPath + '/style/index.css');
});

routes.get('/pages/assets/background-decor.png', (req, res) => {
  res.sendFile(pagesPath + '/assets/background-decor.png');
});

routes.get('/pages/assets/personal-image.png', (req, res) => {
  res.sendFile(pagesPath + '/assets/personal-image.png');
});

export default routes;
