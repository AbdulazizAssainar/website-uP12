"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paths_1 = require("../utilities/paths");
const olymp_trade_1 = __importDefault(require("./api/olymp-trade"));
const routes = (0, express_1.default)();
routes.get('/', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const device = yield getDeviceType();
        if (device == "tablet")
            return res.sendFile(paths_1.pagesPath + '/notsupported.html');
        if (device == "mobile")
            return res.sendFile(paths_1.pagesPath + '/notsupported.html');
        if (device == "desktop")
            return res.sendFile(paths_1.pagesPath + '/notsupported.html');
    });
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
