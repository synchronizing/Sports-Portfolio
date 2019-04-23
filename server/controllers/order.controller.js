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
    .orderById -- show an order
*/

function prettify(cardarray) {
    let cardno = 1;
    let bigstring = "";
    for (let card of cardarray) {
        bigstring += "\n#######\nCard Number: " + cardno + "\n"
        let cardpart = card['card'];
        for(let entry of Object.entries(cardpart))
        {
            bigstring += entry[0] + ":  "+ entry[1] + "\n";
        }
        bigstring += "\nPlayer info:\n";
        for(let entry of Object.entries(card['player']))
        {
            bigstring += entry[0] + ":  "+ entry[1] + "\n";            
        }
        cardno++;
    }
    return bigstring;
}



/* Update an order's properties */
exports.create = function (req, res) {
    var x = prettify(req.body);
    /* Instantiate an Order */
    /* Then save the Order */
    
    var myText = req.user.id + ' That was easy!';
    var mailOptions = {
        from: 'teamsportics@gmail.com',
        to: 'imnoahcook@gmail.com',
        subject: 'New Order',
        text: x
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};





  /* retrieve a order by its particular id */
  exports.orderById = function(req, res, next, orderId) {

    Order.findById(orderId).exec(function(err, order) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        //req.order = order;
        res.json(req.order);
        //next();
      }
    });
  };




