const Sequelize = require("sequelize");
const sequelize = require("../database");

const book = sequelize.define("book", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = book;