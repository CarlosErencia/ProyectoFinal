//DEFINICIÓN DEL ESQUEMA DE LA BASE DE DATOS USANDO MONGOOSE
var mongoose = require('mongoose');

//A la hora de definir el esquema podemos exigir que cumplan un requisito de tipo
//o que sean requeridos o dar valores por defecto
//Este esquema será usado cuando se interactue con la base de datos (en el tirectorio helpers)
var restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'No puede estar en blanco !'
    },
    price:{
        type: Number,
        required: 'No puede estar en blanco !'
    },
    restauranthours:{
        type: String,
        required: 'No puede estar en blanco !'
    },
    numberPhone:{
        type: Number,
        required: 'No puede estar en blanco !'
    },
    description:{
        type: String,
        default: ''
    },
    persons:{
        type: Number,
        default: ''
    },
    image:{
        type: String,
        default: ''
    }
});

//Creo un modelo mongoose especificando el nombre del modelo, el modelo en si y el nombre
//de la colección que tendrá en Mongo (el nombre de la base la 'tabla')


var Restaurant= mongoose.model('Restaurant', restaurantSchema, 'Restaurant');


module.exports = Restaurant;
