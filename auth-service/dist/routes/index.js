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
const express_1 = require("express");
const router = (0, express_1.Router)();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = __importDefault(require("../utils/constants"));
const path = "";
const users = [
    {
        id: 1,
        username: "nguyenvan1",
        name: "Nguyen Van 1",
    },
    {
        id: 2,
        username: "nguyenvan2",
        name: "Nguyen Van 2",
    },
    {
        id: 3,
        username: "nguyenvan3",
        name: "Nguyen Van 3",
    },
    {
        id: 4,
        username: "nguyenvan4",
        name: "Nguyen Van 4",
    },
    {
        id: 5,
        username: "nguyenvan5",
        name: "Nguyen Van 5",
    },
];
const getUserInfoByUserName = (username) => {
    return users.find((user) => user.username === username);
};
const userLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    // const hashedPassword = crypto(constants.PASSWORD_MESSAGE, password);
    const userInfo = yield getUserInfoByUserName(username);
    if (!userInfo) {
        return res.send(400, "User not found!");
    }
    const token = jsonwebtoken_1.default.sign(userInfo, constants_1.default.JWT_SECRET, {
        expiresIn: 60 * 60 * 24,
    });
    res.send(Object.assign(Object.assign({}, userInfo), { accessToken: token }));
});
router.post(`${path}/login`, userLogin);
exports.default = router;
