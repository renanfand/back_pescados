const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Agricultor = require('../models/Agricultor');
const TipoPeixe = require('../models/TipoPeixe');
const Racao = require('../models/Racao');
const Peixe = require('../models/Peixe');

const connection = new Sequelize(dbConfig);

Agricultor.init(connection);
TipoPeixe.init(connection);
Racao.init(connection);

Racao.associate(connection);
Peixe.associate(connection);

module.exports = connection;