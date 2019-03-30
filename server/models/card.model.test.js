var should = require('should'), 
    mongoose = require('mongoose'), 
    Card = require('./card.model'), 
    config = require('../config/config');

var testCard, id;
testCard = {
    card: {
        set: "Collectors Edge Rookie Rage - Key Kraze Holofoil",
        sport: "BASKETBALL",
        year: "1996",
        condition: "Mint",
        setAmount: 25
    },
    player: {
        name: "Ray Allen",
        team: "Minnesota Timberwolves",
        league: "NBA",
        setNumber: 25
    },
    images: {
        front: "https://www.tradingcarddb.com/Images/Cards/Basketball/77692/77692-7078484Fr.jpg",
        back: "https://www.tradingcarddb.com/Images/Cards/Basketball/77692/77692-7078484Bk.jpg"
    }
}

describe('Card Schema Unit Tests', function() {

  before(function(done) {
    mongoose.connect(config.mongo.host, config.mongo.options);
    done();
  });

  describe('Saving to database', function() {
    /*
      Mocha's default timeout for tests is 2000ms. To ensure that the tests do not fail 
      prematurely, we can increase the timeout setting with the method this.timeout()
     */
    this.timeout(10000);

    it('saves properly when ONLY set, sport, and name provided', function(done){
      new Card({
        card: {
            set: testCard.card.set,
            sport: testCard.card.sport,
        },
        player: {
            name: testCard.player.name,
        }
      }).save(function(err, res){
        should.not.exist(err);
        id = res._id;
        done();
      });
    });

    it('saves properly when all properties provided', function(done){
      new Card(testCard).save(function(err, res){
        should.not.exist(err);
        id = res._id;
        done();
      });
    });

    it('throws an error when set not provided', function(done){
      new Card({
        card: {
            sport: testCard.card.sport,
        },
        player: {
            name: testCard.player.name,
        }
      }).save(function(err){
        should.exist(err);
        done();
      })
    });

    it('throws an error when sport not provided', function(done){
      new Card({
        card: {
            set: testCard.card.set,
        },
        player: {
            name: testCard.player.name,
        }
      }).save(function(err){
        should.exist(err);
        done();
      })
    });

    it('throws an error when name not provided', function(done){
        new Card({
          card: {
              set: testCard.card.set,
              sport: testCard.card.sport,
          },
        }).save(function(err){
          should.exist(err);
          done();
        })
      });

  });

  afterEach(function(done) {
    if(id) {
      Card.remove({ _id: id }).exec(function() {
        id = null;
        done();
      });
    } else {
      done();
    }
  });
});
