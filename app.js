var express = require('express')
  , io
  ,	chat = require('./chatServer')
  ;

var app = express()
  , PORT = 7777
  ;
  
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/static'));
app.engine('jade', require('jade').__express);

io = require('socket.io').listen(app.listen(PORT));
chat.init( io.sockets );

app.get("/", function ( req, res ) {
  res.render('index');
});
