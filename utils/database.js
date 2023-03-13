const mysql = require('mysql2');
const Sequelize = require('sequelize');

// const sequelize = new Sequelize('Test_schema', 'root', 'mysqleight', {
//     dialect: 'mysql',
//      host: 'localhost'
// });

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Test_schema',
    password: 'mysqleight',
});

module.exports = pool.promise();