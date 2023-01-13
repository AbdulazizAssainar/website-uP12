"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paths_1 = require("../utilities/paths");
const routes = (0, express_1.default)();
routes.get('/', function (req, res) {
    res.sendFile(paths_1.pagesPath + '/index.html');
});
routes.get('/pages/style/index.css', (req, res) => {
    res.sendFile(paths_1.pagesPath + '/style/index.css');
});
routes.get('/pages/assets/background-decor.png', (req, res) => {
    res.sendFile(paths_1.pagesPath + '/assets/background-decor.png');
});
routes.get('/pages/assets/personal-image.png', (req, res) => {
    res.sendFile(paths_1.pagesPath + '/assets/personal-image.png');
});
exports.default = routes;
