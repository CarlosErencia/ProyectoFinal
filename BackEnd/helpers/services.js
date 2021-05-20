var db = require('../models');


exports.getServices = function(req, res){
    db.Service.find()
    .then(function(services){
        res.json(services);
    })
    .catch(function(err){
        res.send(err);
    })
}


exports.createService = function(req, res){
  db.Service.create(req.body)
  .then(function(newService){
      res.status(201).json(newService);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.getService = function(req, res){
   db.Service.findById(req.params.serviceId)
   .then(function(foundService){
       res.json(foundService);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.updateService =  function(req, res){
   db.Service.findOneAndUpdate({_id: req.params.serviceId}, req.body, {new: true})
   .then(function(service){
       res.json(service);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deleteService = function(req, res){
    db.Service.remove({_id: req.params.serviceId}) 
    .then(function(){
        res.json({message: 'We deleted it!'});
    })
    .catch(function(err){
        res.send(err);
    })
 }


 module.exports = exports;