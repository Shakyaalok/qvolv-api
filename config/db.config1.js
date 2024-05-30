module.exports = {
    host: 'localhost',
    user: 'root',
    password: 'alokshakya',
    database: 'react_crud',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000

    }
}