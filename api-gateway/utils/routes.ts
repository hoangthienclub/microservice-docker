export default [
    {
        url: '/user',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 1000 * 60 * 15,
            max: 500,
        },
        proxy: {
            target: `http://${process.env.USER_SERVICE_URL}:${process.env.USER_SERVICE_PORT}`,
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
            target: `http://${process.env.AUTH_SERVICE_URL}:${process.env.AUTH_SERVICE_PORT}`,
            changeOrigin: true,
            pathRewrite: {
                [`^/auth`]: '/auth',
            },
        }
    },
]