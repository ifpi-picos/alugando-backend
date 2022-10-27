const sequelize = require ('../config/sequelize')
const Sequelize = require('sequelize')


const Inquilino = require('./inquilino')

const Inquilino= Inquilino( sequelize, Sequelize.DataTypes)

const db = {
    Inquilino,
    sequelize
}

module.exports = db

