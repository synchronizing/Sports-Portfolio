const mongoose = require('mongoose');

//shopping cart is represented by an object with some public properties
class Cart {
    constructor() {
       this.data = {};
       this.data.items = [];
       this.data.totals = 0;
       this.data.formattedTotals = '';
    }
 }
 
 module.exports = new Cart();



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