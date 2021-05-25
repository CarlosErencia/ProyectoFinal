var db = require('../models');

exports.getInstallations = function(req, res){
    db.Installation.find()
    .then(function(installations){
        res.json(installations);
    })
    .catch(function(err){
        res.send(err);
    })
}


exports.createInstallation = function(req, res){
  db.Installation.create(req.body)
  .then(function(newInstallation){
      res.status(201).json(newInstallation);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.getInstallation = function(req, res){
   db.Installation.findById(req.params.installationId)
   .then(function(foundInstallation){
       res.json(foundInstallation);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.updateInstallation =  function(req, res){
   db.Installation.findOneAndUpdate({_id: req.params.installationId}, req.body, {new: true})
   .then(function(installation){
       res.json(installation);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deleteInstallation = function(req, res){
    db.Installation.remove({_id: req.params.installationId}) 
    .then(function(){
        res.json({message: 'We deleted it!'});
    })
    .catch(function(err){
        res.send(err);
    })
 }

 
 module.exports = exports;