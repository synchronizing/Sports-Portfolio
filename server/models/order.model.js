const mongoose = require('mongoose');

/*
    _id:        xxxxx
    customerId:     
    cardIds:    []
    price:      $xxx
    confirmed:  true
    createdAt:  xxxx-xx-xx 

*/
    var CardSchema = mongoose.Schema;   //imported to use a card IDs to add to an array
    var UserSchema = mongoose.Schema;

const OrderSchema = new mongoose.Schema({
    customerId:   {
        type: UserSchema.ObjectId,  //
        required: true
    },
    cardIds: {
      type: [CardSchema.ObjectId],
    },
    price: {
        type: String,
        required: true
    },
    confirmed: {
        type: boolean,
        default: false,
        required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  });
  
  module.exports = mongoose.model('Card', CardSchema);




//shopping cart is represented by an object with some public properties
//the shopping cart only needs to track the array of Card objects that a user has added to their cart
/*
class Cart {
    constructor() {
       this.data = {};
       this.data.items = [];
    }
 }
 
 module.exports = new Cart();

 */


/*cart constructors -- an alternative way to make a shopping cart i played around with.
                        but we dont need to track the price so maybe this is too complicated?
module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    //adding an item to the portfolio
    this.add = function(item, id) {
        var storedItem = this.items[id];
        //checks for duplicate items, increases quantity
        if(!storedItem) {
            storedItem = this.items[id] = {
                item: item,
                qty: 0,
                price: 0
            };
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;            
        this.totalPrice += storedItem.price;
    };

    this.generateArray = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};

*/