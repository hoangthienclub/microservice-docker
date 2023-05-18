import { Router } from "express";
const router = Router();
import jwt from "jsonwebtoken";
import constants from "../utils/constants";
import { crypto } from "../utils/helpers";

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

const getUserInfoByUserName = (username: string) => {
    return users.find((user: any) => user.username === username)
}

const userLogin = async (req: any, res: any, next: any) => {
    const { username, password } = req.body;
    // const hashedPassword = crypto(constants.PASSWORD_MESSAGE, password);

    const userInfo = await getUserInfoByUserName(username);

    if (!userInfo) {
        return res.send(400, "User not found!");
    }

    const token = jwt.sign(userInfo, constants.JWT_SECRET, {
        expiresIn: 60 * 60 * 24,
    });

    res.send({
        ...userInfo,
        accessToken: token
    })
};

router.post(`${path}/login`, userLogin);

export default router;
