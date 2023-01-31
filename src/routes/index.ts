import express from 'express';   
import { getDeviceType } from '../modules/deviceType';
import { pagePath } from '../modules/path';
import olymp from './api/olymp';
const routes = express.Router();

routes.get('/', async (req, res) => { 
    const dtype: string = await getDeviceType(req)
    if (dtype == "mobile") {console.log(dtype); return res.sendFile(pagePath + "/mobile/index.html")}
    if (dtype == "tablet") {console.log(dtype); return res.sendFile(pagePath + "/notsup.html")}
    if (dtype == "desktop") {console.log(dtype); return res.sendFile(pagePath + "/desktop/index.html")}
    res.send('unknowen device');
 });

 routes.use('/olymp', olymp)

export default routes;