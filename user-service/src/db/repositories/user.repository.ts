import { isEmpty } from "lodash";
import { User } from"../models";
import { UserInput, UserOutput } from "../models/user.model";

export const create = async(payload: UserInput): Promise<UserOutput> => {
    return User.create(payload);
}

export const update = async (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
    const user = await User.findByPk(id);

    if (!user) {
        throw new Error("not found");
    }

    return user.update(payload);
}

export const getById = async (id: number): Promise<UserOutput> => {
    const user = await User.findByPk(id);

    if (!user) {
        throw new Error("not found");
    }

    return user;
}

export const getAll = async (): Promise<UserOutput[]> => {
    return User.findAll();
}

export const checkEmailExist = async (email: string): Promise<boolean> => {
    const userWithEmail = await User.findOne({
        where: {
            email,
        }
    });
    return !isEmpty(userWithEmail);
}