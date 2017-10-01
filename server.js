// express lib
var express = require('express');

// express instance
var app = express();

// Port
var port = process.env.PORT || 3000;

// db lib
var mongoose = require('mongoose');

// So basically, we need to include it
// It is similar to include the controller
// need to include the route, model, controller
require('./api/models/todoListModel');

// body parser
var bodyParser = require('body-parser');

// db promise
mongoose.Promise = global.Promise;

// connect db
// localhost/Tododb????
mongoose.connect('mongodb://mongo:27017'); 

// We use url in params
app.use(bodyParser.urlencoded({ extended: true }));

// We need to take json
app.use(bodyParser.json());

// It is url mapping with controller
var routes = require('./api/routes/todoListRoutes');

// Pass express app to route
routes(app);

// 404
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


// Run forever
app.listen(port);

console.log('Running at port: ' + port);
