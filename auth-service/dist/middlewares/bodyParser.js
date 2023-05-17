"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
exports.default = (app) => {
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({
        extended: false,
    }));
};
