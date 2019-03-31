'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Card = require('./card.model.js'), 
    cardsJSON = require('./cards.json'),
    config = require('../config/config.js');

/* Connect to your database */
mongoose.connect(config.mongo.host, config.mongo.options);


console.log(cardsJSON.cards.length);

for ( var i=0; i < cardsJSON.cards.length; i++ ) {
    var card = Card(cardsJSON.cards[i]);
    console.log(cardsJSON.cards[i].card.set);
    card.save(function(err) {
     if(err) throw err;
                 });
 
 }
