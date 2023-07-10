const Sequelize = require("sequelize");

const sequelize = new Sequelize("booking-app", "root", "MonkeyD.Luffy", {
    dialect : "mysql",
    host : "localhost"
});

module.exports = sequelize;