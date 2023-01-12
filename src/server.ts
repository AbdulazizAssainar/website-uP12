import express from "express";
import routes from './routes';

const app = express();
const port: string = process.env.PORT || '3000';
const address: string = `localhost:${port}`;

app.use(express.json());

app.use('/', routes)


app.listen(port, function () {
    console.log(`starting app on: http://${address}`);
  });