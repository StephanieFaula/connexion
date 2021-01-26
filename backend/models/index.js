const { Sequelize } = require('sequelize');

require('dotenv').config();

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const db_name = process.env.DB_NAME;

const sequelize = new Sequelize(db_name, user, password, {
    host: host,
    dialect: 'mysql'
})

// Test de connexion
//
// const test = async() => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

// test();

