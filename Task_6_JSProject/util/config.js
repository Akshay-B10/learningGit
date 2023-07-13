const Sequelize = require("sequelize");

const sequelize = new Sequelize("todo-app", "root", "MonkeyD.Luffy", {
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize;