"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || '3000';
const address = `localhost:${port}`;
app.use(express_1.default.json());
app.use('/', routes_1.default);
app.listen(port, function () {
    console.log(`starting app on: http://${address}`);
});
