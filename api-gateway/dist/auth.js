"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = __importDefault(require("./constants"));
exports.default = (app, routes) => {
    routes.forEach((r) => {
        if (r.auth) {
            app.use(r.url, (req, res, next) => {
                const token = req.headers.authorization;
                if (!token) {
                    return res.send(401, 'Token has expired');
                }
                try {
                    const data = jsonwebtoken_1.default.verify(token, constants_1.default.JWT_SECRET);
                    req.user = data;
                    next();
                }
                catch (err) {
                    res.send(401, 'Token has expired');
                }
            });
        }
    });
};
