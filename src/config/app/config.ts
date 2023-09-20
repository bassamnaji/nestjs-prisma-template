// used for main app configuration
export const app = {
    env: process.env.MODE || 'development',
    port: process.env.PORT || 8000,
}
