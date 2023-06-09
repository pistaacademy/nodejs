const Sequelize = require('sequelize')

const sequelize = new Sequelize('node_complete', 'root', 'Sepide777', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;