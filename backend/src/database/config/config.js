"use stricts";
require("dotenv").config();

const config = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DEV,
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_TEST,
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_PRODUCTION,
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
};

module.exports = config;
