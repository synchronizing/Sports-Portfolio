var mongoose = require('mongoose');
var Order = require('../models/order.model.js');
var User = require('../models/user.model.js');
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'teamsportics@gmail.com',
        pass: 'rick100$'
    }
});
/* Methods:
    .create -- creates an order
    .update -- update an existing order with new information.
    .addCard -- add a card to a user's order.
    .delete -- remove a card from a user's order.
    .read -- show an order


*/

/* Create an Order */
/* Order's Need to be created when a user account is created? */
exports.create = function (req, res) {
    /* Instantiate an Order */
    var order = new Order(req.body);
    /* Then save the Order */
    order.save(function (err) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            res.json(order);
        }
    });
};

/* Update an order's properties */
exports.update = function (req, res) {
    Order.findById({ _id: req.params.id }, function (err, order) {
        // Return 404 if order not found:
        if (err) res.status(404).send(err);

        // Only update attributes submitted, don't null anything out:
        if (req.body.customerId) order.customerId = req.body.customerId;
        if (req.body.cardIds) order.cardIds = req.body.cardIds;
        if (req.body.price) order.price = req.body.price;
        if (req.body.confirmed) order.confirmed = req.body.confirmed;

        order.save(function (err) {
            // return 500 if there's an error:
            if (err) res.status(500).send(err);

            // otherwise send order json back with 200 success header:
            res.status(200).send(order);
        });
    });
};


/* Delete an order */
exports.delete = function (req, res) {
    var order = req.order;
    /* Remove the order */
    order.remove({ _id: req.params.id }, function (err) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        //res.json(req.order);
        res.status(200).send({ message: "Order Deleted Successfully" });
    });
};

/* Show the order */
exports.read = function (req, res) {
    /* send back the card as json from the request */
    res.json(req.order);
};


exports.sendMail = function (req, res) {
    var myText = req.user.id + ' That was easy!';
    var mailOptions = {
        from: 'teamsportics@gmail.com',
        to: 'imnoahcook@gmail.com',
        subject: 'Sending Email using Node.js',
        text: myText
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

  /* retrieve a order by its particular CUSTOMER's id */
  exports.orderById = function(req, res, next, id) {

    Order.find({customerId: id}).exec(function(err, order) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        req.order = order;
        next();
      }
    });
  };

  




