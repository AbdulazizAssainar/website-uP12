import * as dotenv from "dotenv";
import cors from 'cors';
import express from "express";
import { sequelize } from "./sequelize";

import { IndexRouter } from "./controllers/v0/index.router";

import bodyParser from "body-parser";
import { V0_FEED_MODELS, V0_USER_MODELS } from "./controllers/v0/model.index";
import { config } from "./config/config";
import routes from "./routes";
import { pagePath, wwwPath } from "./modules/path";

(async () => {
  dotenv.config();

  await sequelize.addModels(V0_FEED_MODELS);
  await sequelize.addModels(V0_USER_MODELS);
  await sequelize.sync();

  console.log("Database Connected");

  const app = express();
  const port = process.env.PORT || 8080;

  app.use(bodyParser.json());
  app.use('/pages', express.static(pagePath))
  app.use('/assets', express.static(pagePath + '/assets'))
  app.use('/ds', express.static(pagePath + '/desktop/style'))
  app.use('/style', express.static(pagePath + '/style'))
  app.use('/fonts', express.static(pagePath + '/assets/fonts'))
  app.use('/scripts', express.static(wwwPath + '/modules'))

  // app.use(cors());
  // We set the CORS origin to * so that we don't need to
  // worry about the complexities of CORS. 
  app.use(cors({
    "allowedHeaders": [
      'Origin', 'X-Requested-With',
      'Content-Type', 'Accept',
      'X-Access-Token', 'Authorization', 'Access-Control-Allow-Origin',
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Methods'
    ],
    "methods": 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    "preflightContinue": true,
    "origin": '*',
  }));

  // Root URI call
app.use('/', routes);

  // Start the Server
  app.listen(port, () => {
    console.log(`Backend server is listening on port ${process.env.URL}:${port}....`);
    console.log(`press CTRL+C to stop server`);
  });
})();
