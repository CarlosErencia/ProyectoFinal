//DEFINICIÓN DE LAS RUTAS DE NUESTRA API
var express = require('express');
var router = express.Router();
var db = require("../models");
// El hecho de guardar toda la lógica de las rutas en el directorio helpers 
// es únicamente por tenerlo todo más ordenador
var helpers = require("../helpers/installations");

  router.route('/')
 .get(helpers.getInstallations)
 .post(helpers.createInstallation)
 

 router.route('/:installationId')
  .get(helpers.getInstallation)
  .put(helpers.updateInstallation)
  .delete(helpers.deleteInstallation)

module.exports = router;