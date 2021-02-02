const mongoose = require('mongoose');

//creating mongoDb cloud connection
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  //console.log("we are connected!");
});

module.exports = db;