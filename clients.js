module.exports = (function () {

  var _clients = [];

  var getElements
    , getclientId
    , deleteSocket
    ;

  getElement = function (name) {
    for (var i = 0; i < _clients.length; i++) {
      if (name == _clients[i].userName) {
        return i;
      }
    }
    return -1;
  };

  getClientId = function (name) {
    var client = getElement(name);

    if (-1 != client)
      return _clients[client].socketId;
  };

  deleteSocket = function (client, id) {
    for (var i = 0; i < client.length; i++)
      if (id == client[i]) {
        client.splice(i, 1);
        break;
      }
  };

  getFriendList = function () {

  };

  inFriendList = function () {

  };

  getFriendId = function () {

  };

  return {
    addClient: function (name, id) {
      var user = getElement(name);

      if (-1 == user)
        _clients.push({
          "userName": name,
          "socketId": [id]
        });
      else
        _clients[user].socketId.push(id)
    },

    removeClient: function (name, id) {
      var index = getElement(name)
        , client = _clients[index].socketId;

      if (client.length > 1)
        deleteSocket(client, id);
      else
        _clients.splice(index, 1);
    },

    isConnected: function (name) {
      return (-1 == getElement(name)) ? false : true;
    },

    getClients: function () {
      return _clients;
    }
  }
})();