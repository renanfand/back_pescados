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
Peixe.init(connection);

Racao.associate(connection.models);
Peixe.associate(connection.models);

module.exports = connection;