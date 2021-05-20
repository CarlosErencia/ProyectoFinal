var db = require('../models');


exports.getRooms = function(req, res){
    db.Room.find()
    .then(function(rooms){
        res.json(rooms);
    })
    .catch(function(err){
        res.send(err);
    })
}



exports.createRoom = function(req, res){
  db.Room.create(req.body)
  .then(function(newRoom){
      res.status(201).json(newRoom);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.getRoom = function(req, res){
   db.Room.findById(req.params.roomId)
   .then(function(foundRoom){
       res.json(foundRoom);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.updateRoom =  function(req, res){
   db.Room.findOneAndUpdate({_id: req.params.roomId}, req.body, {new: true})
   .then(function(room){
       res.json(room);
   })
   .catch(function(err){
       res.send(err);
   })
}

 /* ---------------------------------------- SERVICIOS ----------------------------------------------------*/

exports.getServices = function(req, res){
    db.Service.find()
    .then(function(rooms){
        res.json(rooms);
    })
    .catch(function(err){
        res.send(err);
    })
}


module.exports = exports;