'use strict';

function AppCtrl($scope, socket, timestamp) {

  socket.emit('get:time');

  $scope.getTime = function () {
      timestamp.get().then(function(data) {
         $scope.serverTime = data.serverTime;
      });
  };

  socket.on('init', function () {
      $scope.getTime();
    });

  socket.on('set:time', function () {
      $scope.getTime();
    });

    setInterval(function(){
      socket.emit('get:time');
  }, 1000);

}