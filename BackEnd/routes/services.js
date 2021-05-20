//DEFINICIÓN DE LAS RUTAS DE NUESTRA API
var express = require('express');
var router = express.Router();
var db = require("../models");
// El hecho de guardar toda la lógica de las rutas en el directorio helpers 
// es únicamente por tenerlo todo más ordenador
var helpers = require("../helpers/services");

//El prefijo de las rutas es simpres /api/todos. En la raiz tenemos 2 opciones
// - Obtener todas las tareas (mediante GET)
// - Crear una tarea (mediante POST)
  

 router.route('/')
 .get(helpers.getServices)
 .post(helpers.createService)
 

 router.route('/:servicesId')
  .get(helpers.getService)
  .put(helpers.updateService)
  .delete(helpers.deleteService)

module.exports = router;