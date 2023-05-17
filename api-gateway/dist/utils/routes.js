"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        url: '/user',
        auth: true,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000 * 60 * 15,
            max: 500,
        },
        proxy: {
            target: "http://127.0.0.1:3001",
            changeOrigin: true,
            pathRewrite: {
                [`^/user`]: '/user',
            },
        }
    },
    {
        url: '/auth',
        auth: false,
        creditCheck: true,
        rateLimit: {
            windowMs: 1000 * 60 * 15,
            max: 5,
        },
        proxy: {
            target: "http://127.0.0.1:3002",
            changeOrigin: true,
            pathRewrite: {
                [`^/auth`]: '/auth',
            },
        }
    },
    {
        url: '/premium',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "https://www.google.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/premium`]: '',
            },
        }
    }
];
