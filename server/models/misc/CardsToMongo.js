const fs = require("fs");
const mongoose = require("mongoose");
const path = require('path');

const config = require("../../config/config.js");
const Card = require("../card.model.js");

// Connecting to db.
mongoose.connect(config.mongo.host, config.mongo.options);

// Loading orders.
var cardListings = JSON.parse(fs.readFileSync(path.join(__dirname, '/json/cards.json'), 'utf8'))['cards'];

// Insert demo cards into the database.
Card.collection.insertMany(cardListings, function(err, results) {
    console.log("Inserted cards.json into the database.")
    if (err){
        console.log(err)
    }
    mongoose.disconnect();
});
