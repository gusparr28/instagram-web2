const mongoose = require('mongoose');
const { MONGOURI } = require('./keys');

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Succesfully connected to MongoDB');
});

