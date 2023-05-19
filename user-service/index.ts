import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import setupLogging from"./src/middlewares/logging";
import routes from "./src/api/routes/user.routes";
import dbInit from "./src/db/init";
import cors from "cors";
dotenv.config();


const app: Express = express();
const port = process.env.PORT;

dbInit()
app.use(cors({
    origin: '*'
}));
setupLogging(app);

app.use(routes);

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
