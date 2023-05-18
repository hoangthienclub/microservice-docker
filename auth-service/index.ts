import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import setupLogging from"./middlewares/logging";
import setupBodyParser from"./middlewares/bodyParser";
import routes from "./routes";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors({
    origin: '*'
}));

setupBodyParser(app);
setupLogging(app);


app.use(routes);

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
