const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const CartItem = sequelize.define('cartItem', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    quantity: Sequelize.INTEGER
});
module.exports = CartItem