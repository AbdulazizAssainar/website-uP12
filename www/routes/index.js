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
const deviceType_1 = require("../modules/deviceType");
const path_1 = require("../modules/path");
const routes = express_1.default.Router();
routes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dtype = yield deviceType_1.getDeviceType(req);
    if (dtype == "mobile") {
        console.log(dtype);
        return res.sendFile(path_1.pagePath + "/notsup.html");
    }
    if (dtype == "tablet") {
        console.log(dtype);
        return res.sendFile(path_1.pagePath + "/notsup.html");
    }
    if (dtype == "desktop") {
        console.log(dtype);
        return res.sendFile(path_1.pagePath + "/notsup.html");
    }
    res.send('unknowen device');
}));
exports.default = routes;
//# sourceMappingURL=index.js.map