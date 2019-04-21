const mongoose = require('mongoose');
var OrderSchema = mongoose.Schema;  //imported for created an order when a new user is created
var Order = require('./order.model');

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
    match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
  },
  hashedPassword: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  roles: [{
    type: String, //roles are 'admin' or 'user'
    default: 'user'
  }]
}, {
  versionKey: false
});

UserSchema.post('save', function(next) {
  console.log('A user was created.');

  Order.create({customerId: this._id}, function(err) {
    if(err) console.log(err);
    else console.log('An order was created for the user too!');
  });

  this.updatedAt = currentTime;
  //when a new user is created, a new order is also created for the user.

  next();
});


module.exports = mongoose.model('User', UserSchema);
