/* Dependencies */
var cards = require('../controllers/card.controller.js'), 
    express = require('express'), 
    orders = require('../controllers/order.controller.js'),
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
router.route('/')
  .get(cards.list);

router.route('/:userId')
  .get(order.list);
/*
  The ':' specifies a URL parameter. 
 */
router.route('/:cardId')
  .get(cards.read)
  .put(cards.update)
  .delete(cards.delete);


router.param('cardId', cards.cardById);

module.exports = router;