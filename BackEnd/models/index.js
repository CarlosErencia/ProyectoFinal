//Cargamos Mongoose, una libreria para facilitar el trabajo con Mongo
var mongoose = require('mongoose');
mongoose.set('debug', true);
//Establecemos la conexion con la base de datos todo-api en nuestro servidor Mongo
mongoose.connect('mongodb://localhost/todo-api');
//Habilitamos el uso de Promises para las llamadas a Mongo
mongoose.Promise = Promise;

module.exports.Room = require("./room");
module.exports.Service = require("./service");
module.exports.Installation = require("./installation");
module.exports.Restaurant = require("./restaurant");