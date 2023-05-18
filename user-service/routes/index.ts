import { Router } from "express";
const router = Router();

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

const getUsers = (req: any, res: any, next: any) => {
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