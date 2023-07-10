const Sequelize = require("sequelize");
// const mysql = require("mysql2");

const sequelize = new Sequelize("newdatabase", "root", "MonkeyD.Luffy", {
    dialect : "mysql",
    host : "localhost"
});

module.exports = sequelize;