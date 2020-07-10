const express = require('express')
const ControllerCRUD = require('../controllers/controllerCRUD')
const ControllerGereric = require('../controllers/controllerGeneric')
const Agricultor = require('../models/Agricultor')
const AgricultorBean = require('../beans/AgricultorBean')

let routes = express.Router();

//CRUD BASICO
routes.post('/agricultor', (req, res) => ControllerCRUD.create(req, res, new AgricultorBean(req), Agricultor));
routes.put('/agricultor/:id', (req, res) => ControllerCRUD.update(req, res, new AgricultorBean(req), Agricultor));
routes.delete('/agricultor/:id', (req, res) => ControllerCRUD.delete(req, res, Agricultor));

routes.get('/agricultor/:id', (req, res) => ControllerCRUD.read(req, res, Agricultor));
routes.get('/agricultor', (req, res) => ControllerGereric.findAll(req, res, Agricultor));
routes.get('/agricultores/:tpAgricultor', (req, res) => ControllerGereric.findAgricultoresByTipo(req, res, Agricultor));


module.exports = routes;