const fs = require("fs");
const mongoose = require("mongoose");
const path = require('path');

const config = require("../../config/config.js");
const Order = require("../order.model.js");

// Connecting to db.
mongoose.connect(config.mongo.host, config.mongo.options);

// Loading orders.
var orderListings = JSON.parse(fs.readFileSync(path.join(__dirname, '/json/orders.json'), 'utf8'))['orders'];

// Insert demo cards into the database.
Order.collection.insertMany(orderListings, function(err, results) {
    console.log("Inserted orders.json into the database.")
    if (err){
        console.log(err)
    }
    mongoose.disconnect();
});
