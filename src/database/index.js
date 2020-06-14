const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Agricultor = require('../models/Agricultor');
const TipoPeixe = require('../models/TipoPeixe');
const Racao = require('../models/Racao');

const connection = new Sequelize(dbConfig);

Agricultor.init(connection);
TipoPeixe.init(connection);
Racao.init(connection);

module.exports = connection;