//DEFINICIÓN DE LAS RUTAS DE NUESTRA API
var express = require('express');
var router = express.Router();
var db = require("../models");
// El hecho de guardar toda la lógica de las rutas en el directorio helpers 
// es únicamente por tenerlo todo más ordenador
var helpers = require("../helpers/rooms");

//El prefijo de las rutas es simpres /api/todos. En la raiz tenemos 2 opciones
// - Obtener todas las tareas (mediante GET)
// - Crear una tarea (mediante POST)
router.route('/rooms')
 .get(helpers.getRooms)
 .post(helpers.createRoom)

// Si añadimos el id de la ruta tendremos 3 opciones
// - (GET) Obtener una tarea en concreto
// - (PUT) Actualizar una tarea
// - (DELETE) Borrar una tarea
router.route('/rooms/:roomId')
  .get(helpers.getRoom)
  .put(helpers.updateRoom)
  // .delete(helpers.deleteRoom)
  

 router.route('/services')
 .get(helpers.getServices)
 

module.exports = router;