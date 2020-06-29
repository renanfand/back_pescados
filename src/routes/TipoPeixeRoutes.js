const express = require('express')
const ControllerCRUD = require('../controllers/controllerCRUD')
const ControllerGereric = require('../controllers/controllerGeneric')
const TipoPeixe = require('../models/TipoPeixe')

let routes = express.Router();

//CRUD BASICO
routes.post('/tipopeixe', (req, res) => ControllerCRUD.create(req, res, TipoPeixe));
routes.get('/tipopeixe/:id', (req, res) => ControllerCRUD.read(req, res, TipoPeixe));
routes.put('/tipopeixe/:id', (req, res) => ControllerCRUD.update(req, res, TipoPeixe));
routes.delete('/tipopeixe/:id', (req, res) => ControllerCRUD.delete(req, res, TipoPeixe));

routes.get('/tipopeixe', (req, res) => ControllerGereric.findAll(req, res, TipoPeixe));

module.exports = routes;