/* order controller functions {create, update, delete, read, sendMail} */
var orders = require('../controllers/order.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/')
    .post(orders.create);

router.route('/:id')
  .get(orders.read)
  .put(orders.update)
  .post(orders.sendMail);



module.exports = router;