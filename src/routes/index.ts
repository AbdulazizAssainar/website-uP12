import express from 'express';   
import { getDeviceType } from '../modules/deviceType';
import { pagePath } from '../modules/path';
const routes = express.Router();

routes.get('/', async (req, res) => { 
    console.log()
    const dtype: string = await getDeviceType(req)
    if (dtype == "mobile") {console.log(dtype); return res.sendFile(pagePath + "/notsup.html")}
    if (dtype == "tablet") {console.log(dtype); return res.sendFile(pagePath + "/notsup.html")}
    if (dtype == "desktop") {console.log(dtype); return res.sendFile(pagePath + "/desktop/index.html")}
    res.send('unknowen device');
 });

export default routes;