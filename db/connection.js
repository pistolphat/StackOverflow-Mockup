const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/questions') //need to create Database name
mongoose.Promise = Promise;
module.exports = mongoose;