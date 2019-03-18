var mongoose = require('mongoose');
    Card = require('../models/card.model.js');  

    /* Create a Card */
exports.create = function(req, res) {
  /* Instantiate a Card */
  var card = new Card(req.body);

  /* Then save the Card */
  card.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(card);
    }
  });
};

  /* Delete a Card */
  //This should only be available for administrators to access.!!!!!
exports.delete = function(req, res) {
    var card = req.card;
    /* Remove the article */
    card.remove({_id: req.params.id}, function(err) {
      if(err) {
        console.log(err);
       res.status(400).send(err);
      }
      //res.json(req.listing);
      res.status(200).send({message: "Card Deleted Successfully"});
    });
  };


/* Retreive all the cards in the directory, sorted alphabetically by playerName */
exports.list = function(req, res) {
    Card.find().sort('playerName').exec(function(err, card) {
      if(err) {
        res.status(400).send(err);
      }
      res.json(card);
    });
  };

  