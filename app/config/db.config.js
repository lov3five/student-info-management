const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Successfully connected to MongoDB');
    }).catch((err) => {
        console.error('Connection error: ', err);
    });
};

module.exports = {
    connect
};