const { Sequelize } = require("Sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize("LECTURES", "root", process.env.PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Succesfully connected");
  } catch (e) {
    console.error(e);
  }
})();
