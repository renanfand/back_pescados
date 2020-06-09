const express = require('express')
const AgricultorResource = require('./routes/AgricultorRoutes');

let routes = express.Router();

//ROTAS AGRICULTOR
routes.post('/agricultor', AgricultorResource);
routes.get('/agricultores', AgricultorResource);
routes.get('/agricultor/:id', AgricultorResource);
routes.put('/agricultor/:id', AgricultorResource);
routes.delete('/agricultor/:id', AgricultorResource);


module.exports = routes;