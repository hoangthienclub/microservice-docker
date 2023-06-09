"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const logging_1 = __importDefault(require("./middleware/logging"));
const routes_1 = __importDefault(require("./utils/routes"));
const proxy_1 = __importDefault(require("./middleware/proxy"));
const rateLimit_1 = __importDefault(require("./middleware/rateLimit"));
const auth_1 = __importDefault(require("./middleware/auth"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
(0, logging_1.default)(app);
(0, auth_1.default)(app, routes_1.default);
(0, rateLimit_1.default)(app, routes_1.default);
(0, proxy_1.default)(app, routes_1.default);
app.get("/hello", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
