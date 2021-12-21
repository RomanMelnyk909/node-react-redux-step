const { Sequelize } = require("sequelize");
const db = require("../config/database");

const User = db.define("Users", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  surName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.sync().then(() => {
  console.log("Table User created ...!");
});
module.exports = User;
