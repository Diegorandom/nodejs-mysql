const { Sequelize } = require("Sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize("LECTURES", "root", process.env.PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
