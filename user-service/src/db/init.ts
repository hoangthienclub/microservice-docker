import dotenv from "dotenv";
dotenv.config();
import { User } from "./models";

const isDev = process.env.ENV === "development";
const isTest = process.env.ENV !== "test";

const dbInit = () => Promise.all([
    User.sync({ alter: isDev || isTest }),
]);

export default dbInit;

