"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_proxy_middleware_1 = require("http-proxy-middleware");
exports.default = (app, routes) => {
    routes.forEach((r) => {
        app.use(r.url, (0, http_proxy_middleware_1.createProxyMiddleware)(r.proxy));
    });
};
