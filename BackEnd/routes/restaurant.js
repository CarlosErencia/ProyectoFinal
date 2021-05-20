//DEFINICIÓN DE LAS RUTAS DE NUESTRA API
var express = require('express');
var router = express.Router();
var db = require("../models");
// El hecho de guardar toda la lógica de las rutas en el directorio helpers 
// es únicamente por tenerlo todo más ordenador
var helpers = require("../helpers/restaurants");

  router.route('/')
 .get(helpers.getRestaurants)
 .post(helpers.createRestaurant)
 

 router.route('/:restaurantId')
  .get(helpers.getRestaurant)
  .put(helpers.updateRestaurant)
  .delete(helpers.deleteRestaurant)

module.exports = router;