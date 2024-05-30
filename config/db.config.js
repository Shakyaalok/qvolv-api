'use strict';

const mysql = require('mysql2');

//local mysql db connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'alokshakya',
    database: 'react_crud'
});

dbConn.connect(function(err) {
    console.log('err-->', err)
    if (err) throw err;
    console.log("Database Connected!");
})

module.exports = dbConn;