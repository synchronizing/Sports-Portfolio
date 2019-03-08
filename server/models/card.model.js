const mongoose = require('mongoose');

/* example
playerName: Allen Iverson
cardSet:    Collector's Edge Rookie Rage - Die Cuts
cardNumber: 19
cardsInSet: 50
sport:      BASKETBALL
cardYear:   1996
quality:    mint
imageFront:   http://
imageBack:    http://
quantity:   1
createdAt:  *whenever this entry was created*
*/

const CardSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true
  },
  team: {
    type: String,
  },
  cardDescription: {
      type: String,
      required: true
  },
  sport: {
      type: String,
      enum: ['BASKETBALL', 'BASEBALL', 'HOCKEY', 'BOXING', 'FOOTBALL', 'GOLF', 'HOCKEY', 'MMA', 'SOCCER', 'TENNIS', 'GAMING', 'MISC', 'RACING', 'WRESTLING', 'NON-SPORT'],
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
