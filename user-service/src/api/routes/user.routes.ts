import { Router } from "express";
const router = Router();
import * as userRepository from "../../db/repositories/user.repository"

const path = "";

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
]

const createUser = async (req: any, res: any, next: any) => {
    const { email } = req.body;
    await userRepository.checkEmailExist(email);
    return userRepository.create(req.body);
}

const getUsers = async (req: any, res: any, next: any) => {
    const users = await userRepository.getAll();
    res.send(users);
}

const getUserDetail = (req: any, res: any, next: any) => {
    const id = req.params.id;
    const userInfo = users.find((user: any) => user.id == id);
    if (!userInfo) {
        return res.send(400, "User not found!");
    }
    res.send(userInfo);
}

router.get(`${path}/list`, getUsers)
router.get(`${path}/:id`, getUserDetail)

export default router;