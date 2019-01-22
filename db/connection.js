const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/tweet') //need to create Database name
mongoose.Promise = Promise;
module.exports = mongoose;