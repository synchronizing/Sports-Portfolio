var Card = require('../models/card.model');

var cards = [
    new Card({
        playerName: 'Ray Allen',
        team: 'Minnesota Timberwolves',
        cardDescription: '#2 of 25, 1996 Collectors Edge Rookie Rage - Key Kraze Holofoil',
        sport: 'BASKETBALL',
        imageFront: 'https://www.tradingcarddb.com/Images/Cards/Basketball/77692/77692-7078484Fr.jpg',
        imageBack: 'https://www.tradingcarddb.com/Images/Cards/Basketball/77692/77692-7078484Bk.jpg'
    }),
    new Card({
        playerName: 'David Ortiz',
        team: 'Boston Red Sox',
        cardDescription: '#110 of 300, 2004, Bazooka',
        sport: 'BASEBALL',
        imageFront: 'https://www.tradingcarddb.com/Images/Cards/Baseball/1730/1730-110Fr.jpg',
        imageBack: 'https://www.tradingcarddb.com/Images/Cards/Baseball/1730/1730-186281Bk.jpg'
    })
];






var done = 0;
for (var i = 0; i < cards.length; i++) {
    cards[i].save(function(err, res) {
        done++;
        if(done == cards.length) {
            exit();
        }
    });
}

function exit() {
    Mongoose.disconnect();
}