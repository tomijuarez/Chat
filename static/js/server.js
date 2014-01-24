define ( ['../socket.io/socket.io'], function ( io ) {
  var socket = io.connect('http://localhost');
  return {
    init : function () {
    	var nombre = window.prompt('Cual es tu nombre?', '');
    	socket.emit('named', nombre);
    	
		}
  }
});