'use strict';

const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URI ,{
        define: {
          timestamps: false
        },
    });

module.exports = sequelize;



