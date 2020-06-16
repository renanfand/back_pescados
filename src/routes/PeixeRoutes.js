const express = require('express')
const ControllerCRUD = require('../controller/controllerCRUD')
const ControllerGereric = require('../controller/controllerGeneric')
const Peixe = require('../models/Peixe')

let routes = express.Router();

//CRUD BASICO
routes.post('/peixe', (req, res) => ControllerCRUD.create(req, res, Peixe));
routes.get('/peixe/:id', (req, res) => ControllerCRUD.read(req, res, Peixe));
routes.put('/peixe/:id', (req, res) => ControllerCRUD.update(req, res, Peixe));
routes.delete('/peixe/:id', (req, res) => ControllerCRUD.delete(req, res, Peixe));


routes.get('/peixe', (req, res) => ControllerGereric.findAll(req, res, Peixe));
routes.get('/peixes/:idAgricultor', (req, res) => ControllerGereric.findPeixeByAgricultor(req, res, Peixe));

module.exports = routes;