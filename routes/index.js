var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var uri = "mongodb://localhost:27017/FormMetaDB";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

var form;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
  const database = connection.db;
  const forms = database.collection('forms');
  // Query for a movie that has the title 'Back to the Future'
  const query = { Name: 'Todo' };
  forms.findOne(query).then(form => {
    console.log(form);
    router.get('/', function(req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.render('index', { title: 'Forms', form: JSON.stringify(form) });
    });
  });
}).catch(err => console.log(err));

/* GET home page. */

module.exports = router;
