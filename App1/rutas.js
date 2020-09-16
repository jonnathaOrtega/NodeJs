const express=require('express'),
rutas=express.Router(),
equipo=require('./controladorTerreno'),
requerimiento=require('./controladorCaracteristicas');

rutas.use('/equipo',equipo);
rutas.use('/requerimiento',requerimiento);

module.exports=rutas;