/* card controller functions {create, read, delete, list, update, cardById} */
var cards = require('../controllers/card.controller.js'),
    express = require('express'),
    router = express.Router();

 //  '/' should return a list of all the cards in the db
router.route('/')
  .get(cards.list);

 //   /api/card/:id    routes
router.route('/:id')
  .get(cards.read)
  .put(cards.update)
  .delete(cards.delete);

/* This is for if we decide to make middleware functions 
router.param('cardId', cards.cardById);
*/

module.exports = router;