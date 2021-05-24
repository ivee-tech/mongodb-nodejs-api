const express = require("express");

const app = express();
const port = 4000;

// var indexRouter = require('./routes/forms');
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


var router = express.Router();
const mongoose = require("mongoose");
var uri = "mongodb://localhost:27017/FormMetaDB";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
const forms = require('./model');

app.use("/", router);

connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});

router.route('/forms').get(function(req, res, next) {
    const query = { };
    forms.find(query, function(err, result) {
        if (err) {
          res.send(err);
        } else {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.send(result);
        }
      });
});


app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});