"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wwwPath = exports.pagePath = void 0;
const path_1 = __importDefault(require("path"));
exports.pagePath = path_1.default.join(__dirname, "../../pages");
exports.wwwPath = path_1.default.join(__dirname, "../../www");
//# sourceMappingURL=path.js.map