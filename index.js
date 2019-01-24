const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const hbs = require('hbs')
mongoose.Promise = Promise

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true}))

app.use(require('./routes/index.js'))

// app.get("/", (req, res) => {
//   res.render('index', { name: req.params.name })
// });


// app.post('/', (req, res) => {
//   res.render('index', {
//     name: req.body.firstName,
//   })
// })

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
