var
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  PORT = 3000

// _____________Server_________________________//
  app.listen(PORT, function (err) {
    if (err) return console.log(err);
    console.log("Server running on port:" + PORT);
  })
