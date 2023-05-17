import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import setupLogging from"./middleware/logging";
import routes from "./utils/routes";
import setupProxies from "./middleware/proxy";
import setupRateLimit from "./middleware/rateLimit";
import setupAuth from "./middleware/auth";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

setupLogging(app);
setupAuth(app, routes);
setupRateLimit(app, routes);
setupProxies(app, routes);

app.get("/hello", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
