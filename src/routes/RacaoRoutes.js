const express = require('express')
const ControllerCRUD = require('../controllers/controllerCRUD')
const ControllerGereric = require('../controllers/controllerGeneric')
const Racao = require('../models/Racao')

let routes = express.Router();

//CRUD BASICO
routes.post('/racao', (req, res) => ControllerCRUD.create(req, res, Racao));
routes.get('/racao/:id', (req, res) => ControllerCRUD.read(req, res, Racao));
routes.put('/racao/:id', (req, res) => ControllerCRUD.update(req, res, Racao));
routes.delete('/racao/:id', (req, res) => ControllerCRUD.delete(req, res, Racao));


routes.get('/racao', (req, res) => ControllerGereric.findAll(req, res, Racao));
routes.get('/racoes/:idAgricultor', (req, res) => ControllerGereric.findRacaoByAgricultor(req, res, Racao));

module.exports = routes;