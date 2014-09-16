'use strict';

var express = require('express'),
  routes = require('./routes'),
  url = require('url'),
  fs = require('fs'),
  https = require('https'),
  http = require('http'),
  socket = require('./routes/socket.js');

var app = module.exports = express.createServer();

var io = require('socket.io').listen(app);

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {
    layout: false
  });

  app.use(express.static(__dirname + '/public'));
});

app.get('/api/current', routes.apidoc);

app.get('*', routes.index);

io.sockets.on('connection', socket);

app.listen(3000, function(){
  console.log("Server listening on port 3000");
});
