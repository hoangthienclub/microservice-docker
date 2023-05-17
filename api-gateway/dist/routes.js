"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        url: '/free',
        auth: true,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000 * 60 * 15,
            max: 5
        },
        proxy: {
            target: "https://www.google.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/free`]: '',
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
