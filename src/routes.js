const express = require('express')
const AgricultorRoutes = require('./routes/AgricultorRoutes');
const TipoPeixeRoutes = require('./routes/TipoPeixeRoutes');
const RacaoRoutes = require('./routes/RacaoRoutes');
const PeixeRoutes = require('./routes/PeixeRoutes');

let routes = express.Router();


//ROTAS AGRICULTOR
routes.post('/agricultor', AgricultorRoutes);
routes.get('/agricultor', AgricultorRoutes);
routes.get('/agricultor/:id', AgricultorRoutes);
routes.put('/agricultor/:id', AgricultorRoutes);
routes.delete('/agricultor/:id', AgricultorRoutes);
routes.get('/agricultores/:tpAgricultor', AgricultorRoutes);


//ROTAS TIPOPEIXE
routes.post('/tipopeixe', TipoPeixeRoutes);
routes.get('/tipopeixe', TipoPeixeRoutes);
routes.get('/tipopeixe/:id', TipoPeixeRoutes);
routes.put('/tipopeixe/:id', TipoPeixeRoutes);
routes.delete('/tipopeixe/:id', TipoPeixeRoutes);


//ROTAS RAÇÃO
routes.post('/racao', RacaoRoutes);
routes.get('/racao', RacaoRoutes);
routes.get('/racao/:id', RacaoRoutes);
routes.put('/racao/:id', RacaoRoutes);
routes.delete('/racao/:id', RacaoRoutes);
routes.get('/racoes/:idAgricultor', RacaoRoutes);


//ROTAS PEIXE
routes.post('/peixe', PeixeRoutes);
routes.get('/peixe', PeixeRoutes);
routes.get('/peixe/:id', PeixeRoutes);
routes.put('/peixe/:id', PeixeRoutes);
routes.delete('/peixe/:id', PeixeRoutes);
routes.get('/peixes/:idAgricultor', PeixeRoutes);

module.exports = routes;