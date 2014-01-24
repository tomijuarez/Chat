var clients  = require('./clients.js')
  , messages = require('./messages.js')
  ;

module.exports = (function () {

  var sendMessage;


  return {

    init: function (sockets) {

      sockets.on('connection', function (socket) {

        var socketName
          , socketId = socket.id;

        socket.on('named', function (name) {
          socketName = name;
          clients.addClient(socketName, socketId);
        });



        socket.on('disconnect', function () {
          clients.removeClient(socketName, socket.id);
        });

      });
    }
  }
})();