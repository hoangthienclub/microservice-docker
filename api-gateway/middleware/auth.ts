import jwt from "jsonwebtoken";
import constants from "../utils/constants";

export default (app: any, routes: any) => {
    routes.forEach((r: any) => {
        if (r.auth) {
            app.use(r.url, (req: any, res: any, next: any) => {
                const token = req.headers.authorization;
                if (!token) {
                    return res.send(401, 'Token has expired');
                }
                try {
                    const data = jwt.verify(token, constants.JWT_SECRET);
                    req.user = data;
                    next();
                }
                catch (err) {
                    res.send(401, 'Token has expired');
                }
            })
        }
    })
}