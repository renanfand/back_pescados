const express = require('express')
const ControllerCRUD = require('../controller/controllerCRUD')
const ControllerGereric = require('../controller/controllerGeneric')
const Agricultor = require('../models/Agricultor')

let routes = express.Router();

//CRUD BASICO
routes.post('/agricultor', (req, res) => ControllerCRUD.create(req, res, Agricultor));
routes.get('/agricultor/:id', (req, res) => ControllerCRUD.read(req, res, Agricultor));
routes.put('/agricultor/:id', (req, res) => ControllerCRUD.update(req, res, Agricultor));
routes.delete('/agricultor/:id', (req, res) => ControllerCRUD.delete(req, res, Agricultor));


routes.get('/agricultor', (req, res) => ControllerGereric.findAll(req, res, Agricultor));

module.exports = routes;