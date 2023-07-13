const Sequelize = require("sequelize");

const sequelize = require("../util/config");

const Todo = sequelize.define("todo", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Todo;