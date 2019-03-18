const mongoose = require('mongoose');

/*
    _id:        xxxxx
    customerId:     
    cardIds:    []
    price:      $xxx
    confirmed:  true
    createdAt:  xxxx-xx-xx 

*/
    var CardSchema = mongoose.Schema;   //imported to use a card IDs to add to an array
    var UserSchema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
    customerId:   {
        type: UserSchema.ObjectId,  
        required: true
    },
    cardIds: {
      type: [CardSchema.ObjectId],
    },
    price: {
        type: String,
        required: true
    },
    confirmed: {
        type: boolean,
        default: false,
        required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: Date
  });
  
/* create a 'pre' function that adds the updatedAt (and createdAt if not already there) property */
/* This will help us see when cards are updated */
/* FUTURE: We could also add more properties to this function, such as tracking which user made changes */
OrderSchema.pre('save', function(next) {
    var currentTime = new Date;
    this.updatedAt = currentTime;
    if(!this.createdAt)
    {
      this.createdAt = currentTime;
    }
    next();
  });
  
  /* Use your schema to instantiate a Mongoose model */
  var Order = mongoose.model('Order', OrderSchema);
  
  /* Export the model to make it avaiable to other parts of your Node application */
  module.exports = Order;
  