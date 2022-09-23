// (function () {

  // var whiteboard = window.whiteboard;
  // var socket = window.io(window.location.origin);

  var whiteboard = require('./whiteboard');

  // Si no declaro el path, lo voy a buscar directo a node modules
  var io = require('socket.io-client');
  // generar el socket con la invocacion a io
  var socket = io(window.location.origin);


  socket.on('connect', function () {
    console.log('Connected!');
  });

  socket.on('load', function (strokes) {

    strokes.forEach(function (stroke) {
      var start = stroke.start;
      var end = stroke.end;
      var color = stroke.color;
      whiteboard.draw(start, end, color, false);
    });

  });

  socket.on('draw', function (start, end, color) {
    whiteboard.draw(start, end, color, false);
  });

  whiteboard.on('draw', function (start, end, color) {
    socket.emit('draw', start, end, color);
  });

// })();
