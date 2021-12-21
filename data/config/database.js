const Sequelize = require("sequelize");
const config = require("./settings");

module.exports = new Sequelize(
  config.DATABASE_NAME,
  config.DATABASE_USER,
  config.DATABASE_PASS,
  {
    dialect: config.DATABASE_DIALECT,
    host: config.DATABASE_URL,
    port: config.DATABASE_PORT,
  }
);
