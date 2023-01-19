import express, { Request, Response } from 'express';
import { buildPath, pagesPath } from '../../utilities/paths';

const olymp: express.Application = express();

olymp.get('/', function (req: Request, res: Response) {
  res.sendFile(pagesPath + '/olymptrade.html');
});

olymp.get('/fun', function (req: Request, res: Response) {
  res.sendFile(buildPath + '/module/olymptrade.js');
});


export default olymp;
