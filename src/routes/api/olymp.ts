import express from 'express';   
import { pagePath } from '../../modules/path';
const olymp = express.Router();

olymp.get('/', async (req, res) => { 
    res.sendFile(pagePath + "/olymp.html")
 });

export default olymp;