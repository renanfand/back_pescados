const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Agricultor = require('../models/Agricultor');

const connection = new Sequelize(dbConfig);

Agricultor.init(connection);

module.exports = connection;