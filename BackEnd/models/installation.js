//DEFINICIÓN DEL ESQUEMA DE LA BASE DE DATOS USANDO MONGOOSE
var mongoose = require('mongoose');

//A la hora de definir el esquema podemos exigir que cumplan un requisito de tipo
//o que sean requeridos o dar valores por defecto
//Este esquema será usado cuando se interactue con la base de datos (en el tirectorio helpers)
var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    slug: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: ''
    },
    price:{
        type: Number,
        default: 100
    },
    size:{
        type: Number,
        default: 200

    },
    capacity:{
        type: Number,
        default: 200
    },
    pets:{
        type: Boolean,
        default: false
    },
    breakfast:{
        type: Boolean,
        default: true
    },
    featured:{
        type: Boolean,
        default: false
    },
    description:{
        type: String,
        default: ''
    },
    extras:{
        type: String,
        default: ''
    },
    images:{
        type: String,
        default: ''
    },
    versionKey: false 
});

//Creo un modelo mongoose especificando el nombre del modelo, el modelo en si y el nombre
//de la colección que tendrá en Mongo (el nombre de la base la 'tabla')
var Todo = mongoose.model('Todo', todoSchema, 'Habitaciones');


var servicioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    description:{
        type: String,
        default: ''
    }
});


var Service= mongoose.model('Service', servicioSchema, 'Servicios');


module.exports = Service;
module.exports = Todo;