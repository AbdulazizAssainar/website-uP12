"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const device_1 = require("../utilities/device");
const paths_1 = require("../utilities/paths");
const olymp_trade_1 = __importDefault(require("./api/olymp-trade"));
const routes = (0, express_1.default)();
routes.get('/', function (req, res) {
    const device = (0, device_1.getDeviceType)(req);
    if (device == "tablet") {
        console.log(device);
        return res.sendFile(paths_1.pagesPath + '/notsupported.html');
    }
    if (device == "mobile") {
        console.log(device);
        return res.sendFile(paths_1.pagesPath + '/notsupported.html');
    }
    if (device == "desktop") {
        console.log(device);
        return res.sendFile(paths_1.pagesPath + '/notsupported.html');
    }
});
routes.use('/olymp', olymp_trade_1.default);
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
