const { DataTypes } = require("sequelize");
const crypto = require("crypto");


module.exports = (sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    isAdmin: DataTypes.BOOLEAN
  });
  return User;
};