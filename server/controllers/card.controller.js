var mongoose = require('mongoose');
    Card = require('../models/card.model.js');  

    /* methods:
        .create -- create a card
        .read -- show current card's info
        .delete -- delete a card by its id
        .list -- return all cards in json format sorted by playerName
        .update -- update a card's information
        .cardById -- retrieve a card by its id
    */


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

    /* Show the current Card */
exports.read = function(req, res) {
    /* send back the card as json from the request */
    res.json(req.card);
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
      //res.json(req.card);
      res.status(200).send({message: "Card Deleted Successfully"});
    });
  };


/* Retreive all the cards in the directory, sorted alphabetically by playerName */
exports.list = function(req, res) {
    Card.find().sort('card.set').exec(function(err, card) {
      if(err) {
        res.status(400).send(err);
      }
      res.json(card);
    });
  };

/* retrieve a card and update its properties! */
/* This should only be available for admins to access */
exports.update = function(req, res) {
    Card.findById({_id: req.params.id}, function(err, card) {
      //return 404 if the card is not found
      if(err) {
        res.status(404).send(err);
      }
      else {
        if (req.body.card.set) card.card.set = req.body.card.set;
        if (req.body.card.sport) card.card.sport = req.body.card.sport;
        if (req.body.card.year) card.card.year = req.body.card.year;
        if (req.body.card.condition) card.card.condition = req.body.card.condition;
        if (req.body.card.setAmount) card.card.setAmount = req.body.card.setAmount;
        if (req.body.player.name) card.player.name = req.body.player.name;
        if (req.body.player.team) card.player.team = req.body.player.team;
        if (req.body.player.league) card.player.league = req.body.player.league;
        if (req.body.player.setNumber) card.player.setNumber = req.body.player.setNumber;
        if (req.body.images.front) card.images.front = req.body.images.front;
        if (req.body.images.back) card.images.back = req.body.images.back;
        if (req.body.bought) card.bought = req.body.bought;

        card.save(function(err) {
          //return 500 if there is an error
          if(err) {
            res.status(500).send(err);
          }
          else {
            res.json(card);
          }
        });
      }
    });
};

  /* retrieve a card by its particular id */
  exports.cardById = function(req, res, next, id) {

    Card.findById(id).exec(function(err, card) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        req.card = card;
        next();
      }
    });
  };