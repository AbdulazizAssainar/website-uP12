import express, { Request, Response } from 'express';
import { pagesPath } from '../../utilities/paths';

const olymp: express.Application = express();

olymp.get('/', function (req: Request, res: Response) {
  res.sendFile(pagesPath + '/index.html');
});
export default olymp;
