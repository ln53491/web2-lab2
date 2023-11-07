/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    reactStrictMode: true,
    env: {
        POSTGRES_URL: process.env.POSTGRES_URL,
    },

}

