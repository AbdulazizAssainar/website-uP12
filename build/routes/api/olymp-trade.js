"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paths_1 = require("../../utilities/paths");
const olymp = (0, express_1.default)();
olymp.get('/', function (req, res) {
    res.sendFile(paths_1.pagesPath + '/olymptrade.html');
});
olymp.get('/fun', function (req, res) {
    res.sendFile(paths_1.buildPath + '/module/olymptrade.js');
});
exports.default = olymp;
