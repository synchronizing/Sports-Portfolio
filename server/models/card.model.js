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
const CardSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model('Card', CardSchema);
