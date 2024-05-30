const jwtConfig = {
    accessTokenSecret: 't',
    refreshTokenSecret: 'e',
    saltRounds: 10,
    jwt_timeout: '20m',
    corsOptions: {
        origin: ['http://192.168.1.10:3000', 'http://localhost:3000', 'http://192.168.1.10:5000', 'http://localhost:5000']
    }
}
module.exports = jwtConfig
