var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var uri = "mongodb://localhost:27017/FormMetaDB";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

router.route('/forms').get(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
    const database = connection.db;
    const forms = database.collection('forms');
    // Query for a movie that has the title 'Back to the Future'
    const query = { };
    forms.find(query).then(result => {
      console.log(result);
      res.send(result);
    });
  });
});

module.exports = router;
