"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagesPath = exports.buildPath = exports.srcPath = exports.appPath = void 0;
const path_1 = __importDefault(require("path"));
const appPath = process.cwd();
exports.appPath = appPath;
const srcPath = path_1.default.resolve(appPath + '/src');
exports.srcPath = srcPath;
const buildPath = path_1.default.resolve(appPath + '/build');
exports.buildPath = buildPath;
const pagesPath = path_1.default.resolve(appPath + '/pages');
exports.pagesPath = pagesPath;
