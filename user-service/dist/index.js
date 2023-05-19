"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const logging_1 = __importDefault(require("./src/middlewares/logging"));
const init_1 = __importDefault(require("./src/db/init"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
console.log('thien:', process.env);
const app = (0, express_1.default)();
const port = process.env.PORT;
(0, init_1.default)();
app.use((0, cors_1.default)({
    origin: '*'
}));
(0, logging_1.default)(app);
// app.use(routes);
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
