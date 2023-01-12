import express, { Request, Response } from 'express';

const routes: express.Application = express();

routes.get('/', function (req: Request, res: Response) {
  res.send('Index route');
});

export default routes;
