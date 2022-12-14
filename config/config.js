/* eslint-disable const/no-anonymous-default-export */
// const mysql2 = require( 'mysql2'
const mysql2 = require("mysql2");
require("dotenv").config();

module.exports = {
  development: {
    database: process.env.DB_NAME_DEV,
    username: process.env.DB_USERNAME_DEV,
    password: process.env.DB_PASSWORD_DEV,
    port: process.env.DB_PORT,
    logging: false,
    host: process.env.DB_HOSTNAME_DEV,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    pool: {
      max: 50,
      min: 10,
      acquire: 60000,
      idle: 10000,
    },
  },
  test: {
    storage: ":memory",
    dialect: "mysql",
  },
  staging: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    logging: false,
    dialect: "mysql",
  },
  production: {
    database: process.env.DB_NAME_PROD,
    username: process.env.DB_USERNAME_PROD,
    password: process.env.DB_PASSWORD_PROD,
    port: process.env.DB_PORT || 3306,
    logging: false,
    host:
      process.env.DB_HOSTNAME_PROD,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    dialect: "mysql",
    dialectModule: mysql2,
    pool: {
      max: 50,
      min: 10,
      acquire: 60000,
      idle: 10000,
    },
  },
};
