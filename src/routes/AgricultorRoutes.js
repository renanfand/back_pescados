const express = require('express')
const Resource = require('../resource/resourceDefault')
const Agricultor = require('../models/Agricultor')

let routes = express.Router();

//CRUD BASICO
routes.post('/agricultor', (req, res) => Resource.create(req, res, Agricultor));
routes.get('/agricultores', (req, res) => Resource.findAll(req, res, Agricultor));
routes.get('/agricultor/:id', (req, res) => Resource.read(req, res, Agricultor));
routes.put('/agricultor/:id', (req, res) => Resource.update(req, res, Agricultor));
routes.delete('/agricultor/:id', (req, res) => Resource.delete(req, res, Agricultor));


module.exports = routes;