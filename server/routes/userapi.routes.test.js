var should = require('should'), 
    request = require('supertest'), 
    express = require('../config/express'), 
    Card = require('../models/card.model.js'),
    Order = require('../models/order.model.js');

/* Global variables */
var app, agent, card, id, order;

/* Unit tests for testing server side routes for the card and order API */
//going in order of userapi.route.js

describe('Listings CRUD tests', function() {

  this.timeout(10000);

  before(function(done) {
    app = express.init();
    agent = request.agent(app);

    done();
  });
// api/userapi/ 'a user should be able to see the card db'
  it('should be able to retrieve all cards', function(done) {
    agent.get('/api/userapi/')
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.body.should.have.length(6);
        done();
      });
  });
// api/userapi/:userId  'a user should be able to see their order'
  it('should be able to retrieve a their own order', function(done) {
    Order.findOne({_id: "5ca23c9897689ffb2abd3fe0"}, function(err, order) {
      if(err) {
        console.log(err);
      } else {
        agent.get('/api/userapi/' + order.customerId)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            should.exist(res);
            res.body.cardIds.should.equal(["5ca0f66b7724f0eeeaab1c20", "5ca0f66b7724f0eeeaab1c23", "5ca0f66b7724f0eeeaab1c21"]);
            res.body.customerId.should.equal(order.customerId.toString());
            done();
          });
      }
    });
  });

  // api/userapi/:userId  'a user should be able to send an email of their order'
  it('should be able to send an email of their order', function(done) {
    Order.findOne({_id: "5ca23c9897689ffb2abd3fe0"}, function(err, order) {
      if(err) {
        console.log(err);
      } else {
        agent.post('/api/userapi/' + order.customerId)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            should.exist(res);
            done();
          });
      }
    });
  });

  // api/userapi/:cardId  'a user should be able to select a specific card from the db'
  it('should be able to select a specific card', function(done) {
    Card.findOne({_id: "5ca0f66b7724f0eeeaab1c22"}, function(err, card) {
      if(err) {
        console.log(err);
      } else {
        agent.get('/api/userapi/' + card.id)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            should.exist(res);
            res.body.card.sport.should.equal('BASKETBALL');
            res.body.card.condition.should.equal('Fair');
            res.body._id.should.equal(card._id.toString());
            done();
          });

      }
    });
  });

  //  api/userapi/:cardId 'a user should be able to update their order'
  it('should be able to add a card to their order', function(done) {
    var updatedOrder = {
      customerId: "5ca23c9897689ffb2abd3fe0",
      cardIds: ["5ca0f66b7724f0eeeaab1c20", "5ca0f66b7724f0eeeaab1c23", "5ca0f66b7724f0eeeaab1c21", "5ca0f66b7724f0eeeaab1c24"],
    };
    Order.findOne({_id: "5ca23c9897689ffb2abd3fe0"}, function(err, order) {
      if(err) {
        console.log(err);
      } else {
        agent.put('/api/userapi/' + order.id)
          .send(updatedOrder)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            should.exist(res);
            res.body.customerId.should.equal('5ca23c9897689ffb2abd3fe0');
            res.body.cardIds.should.equal('["5ca0f66b7724f0eeeaab1c20", "5ca0f66b7724f0eeeaab1c23", "5ca0f66b7724f0eeeaab1c21", "5ca0f66b7724f0eeeaab1c24"]');
            done();
          });
      }
    });
  });

  //  api/userapi/:orderId  'a user should be able to update their order: deleting a card'
  it('should be able to update their order: by deleting a card', function(done) {
    var updatedOrder = {
      customerId: "5ca23c9897689ffb2abd3fe0",
      cardIds: ["5ca0f66b7724f0eeeaab1c20", "5ca0f66b7724f0eeeaab1c23"], 
    };
    Order.findOne({_id: ""}, function(err, order) {
      if(err) {
        console.log(err);
      } else {
      agent.put('/api/userapi/' + order.id)
      .send(updatedOrder)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.customerId.should.equal('5ca23c9897689ffb2abd3fe0');
        res.body.cardIds.should.equal('["5ca0f66b7724f0eeeaab1c20", "5ca0f66b7724f0eeeaab1c23"]');
        done();
      });
      }
    
    });
  });

  after(function(done) {
    if(id) {
      Listing.remove({_id: id}, function(err){
        if(err) throw err;
        done();
      })
    }
    else {
        done();
    }
  });
});
