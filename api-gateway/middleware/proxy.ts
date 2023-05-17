import { createProxyMiddleware } from "http-proxy-middleware";

export default (app: any, routes: any) => {
    routes.forEach((r: any) => {
        app.use(r.url, createProxyMiddleware(r.proxy));
    })
}