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

    /*
  The ':' specifies a URL parameter. 
 */
 //   /api/userapi/     routes
router.route('/')
  // able to see get ALL cards
  .get(cards.list);


//    /api/userapi/:userId    routes
router.route('/:userId')
  //able to get their order by their userid
  .get(orders.read)
  //able to update their order by their userid
  .put(orders.update)
  //able to send their order by email
  .post(orders.sendMail);

 //   /api/userapi/:cardId    routes
router.route('/:cardId')
  //able to access the info of a specific card
  .get(cards.read);

router.param('cardId', cards.cardById);
router.param('orderId', orders.orderById);

module.exports = router;