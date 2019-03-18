const mongoose = require('mongoose');

/* current 
    _id:                xxxxxxxx
    playerName:         Allen Iverson
    team:               Philadelphia 76ers
    cardDescription:    Collector's Edge Rookie Rage - Die Cuts
    sport:              Basketball
    imageFront:         http://
    imageBack:          http://
*/


//the card id is card._id
//every card object is automatically assigned an id when it is created
var CardSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true
  },
  bought:   {
      type: boolean,
      required: true
  },
  team: {
    type: String,
  },
  description: {
      type: String,
      required: true
  },
  sport: {
      type: String,
      enum: ['BASKETBALL', 'BASEBALL', 'HOCKEY', 'BOXING', 'FOOTBALL', 'GOLF', 
      'HOCKEY', 'MMA', 'SOCCER', 'TENNIS', 'GAMING', 'MISC', 'RACING', 'WRESTLING', 'NON-SPORT'],
      required: true
  },
  imageFront: {
      type: String,
      required: true
  },
  imageBack: {
      type: String,
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



