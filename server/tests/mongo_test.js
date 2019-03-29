//test if we can establish a connection to our mongodb
const mongoose = require('mongoose');
//tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://xxx/'); //need to add our uri when our db is made
mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn('Error : ',error);
    });

//Called hooks which runs before something.

//test User/Order/Card connections
beforeEach((done) => {
    mongoose.connection.collections.xxx.drop(() => {    //REPLACE XXX with collection name
         //this function runs after the drop is completed
        done(); //go ahead everything is done now.
    }); 
});