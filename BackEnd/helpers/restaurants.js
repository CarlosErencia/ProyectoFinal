var db = require('../models');

exports.getRestaurants = function(req, res){
    db.Restaurant.find()
    .then(function(restaurants){
        res.json(restaurants);
    })
    .catch(function(err){
        res.send(err);
    })
}


exports.createRestaurant = function(req, res){
  db.Restaurant.create(req.body)
  .then(function(newRestaurant){
      res.status(201).json(newRestaurant);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.getRestaurant = function(req, res){
   db.Restaurant.findById(req.params.restaurantId)
   .then(function(foundRestaurant){
       res.json(foundRestaurant);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.updateRestaurant =  function(req, res){
   db.Restaurant.findOneAndUpdate({_id: req.params.restaurantId}, req.body, {new: true})
   .then(function(restaurant){
       res.json(restaurant);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deleteRestaurant = function(req, res){
    db.Restaurant.remove({_id: req.params.restaurantId}) 
    .then(function(){
        res.json({message: 'We deleted it!'});
    })
    .catch(function(err){
        res.send(err);
    })
 }

 
 module.exports = exports;