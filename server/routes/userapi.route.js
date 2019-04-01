/* Dependencies 
var cards = require('../controllers/card.controller.js'), 
    express = require('express'), 
    orders = require('../controllers/order.controller.js'),
    router = express.Router();
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */

/* card controller functions {create, read, delete, list, update, cardById} */
var cards = require('../controllers/card.controller.js'),
/* order controller functions {create, update, delete, read, sendMail} */
    orders = require('../controllers/order.controller.js'),
    express = require('express'),
    router = express.Router();

 //   /api/userapi/     routes
router.route('/')
  .get(cards.list);


//    /api/userapi/:userId    routes
router.route('/:userId')
  .get(orders.read)
  .post(orders.sendMail);



/*
  The ':' specifies a URL parameter. 
 */

 //   /api/userapi/:cardId    routes
router.route('/:cardId')
  .get(cards.read)
  .put(cards.update)
  .delete(cards.delete);


router.param('cardId', cards.cardById);

module.exports = router;