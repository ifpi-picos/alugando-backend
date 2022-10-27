const Sequelize = require('require')
const configDatabase = require('./database')

const sequelize = new Sequelize(configDatabase)

module.exports = sequelize