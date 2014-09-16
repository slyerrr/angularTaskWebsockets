'use strict';

module.exports = function (socket) {

socket.on('init', function () {
    socket.emit('set:time');
  });

socket.on('get:time', function () {
    socket.emit('set:time');
  });

};