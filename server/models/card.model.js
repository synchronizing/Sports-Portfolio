const mongoose = require('mongoose');


//the card id is card._id
//every card object is automatically assigned an id when it is created
var CardSchema = new mongoose.Schema({
  card: {
    set: {
      type: String,
      required: true,
    },
    sport: {
      type: String,
      enum: ['BASKETBALL', 'BASEBALL', 'HOCKEY', 'BOXING', 'FOOTBALL', 'GOLF', 
      'HOCKEY', 'MMA', 'SOCCER', 'TENNIS', 'GAMING', 'MISC', 'RACING', 'WRESTLING', 'NON-SPORT'],
      required: true,
    },
    year: String,
    condition: String,
    setAmount: Number,
  },
  player: {
    name: {
      type: String,
      required: true,
    },
    team: String,
    league: String,
    setNumber: Number,
  },
  images: {
    front: String,
    back: String,
    other: [ ],
  },
  bought:   {
      type: Boolean,
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
CardSchema.pre('save', function(next) {
  var currentTime = new Date;
  this.updatedAt = currentTime;
  if(!this.createdAt)
  {
    this.createdAt = currentTime;
  }
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Card = mongoose.model('Card', CardSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Card;



