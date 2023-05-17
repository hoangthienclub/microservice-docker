"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const path = "/user";
const users = [
    {
        id: 1,
        name: "Nguyen Van 1"
    },
    {
        id: 2,
        name: "Nguyen Van 2"
    },
    {
        id: 3,
        name: "Nguyen Van 3"
    },
    {
        id: 4,
        name: "Nguyen Van 4"
    },
    {
        id: 5,
        name: "Nguyen Van 5"
    }
];
const getUsers = (req, res, next) => {
    res.send(users);
};
const getUserDetail = (req, res, next) => {
    const id = req.params.id;
    const userInfo = users.find((user) => user.id == id);
    if (!userInfo) {
        return res.send(400, "User not found!");
    }
    res.send(userInfo);
};
router.get(`${path}/:id`, getUserDetail);
router.get(`${path}s`, getUsers);
exports.default = router;
