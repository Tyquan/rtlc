var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var compression = require('compression');
var config = require('./config/config'); // get our config file

var index = require('./routes/index');
var login = require('./routes/login');
var admin = require('./routes/admin');
var statics = require('./routes/static');
var messages = require('./routes/messages');

// mlab connection 
var mongoUri = 'mongodb://heroku_3m8wzxwn:737qhdqe8ujlcbvch8rfrtm9em@ds023495.mlab.com:23495/heroku_3m8wzxwn'; 
// mongoose mlab connection
mongoose.connect(mongoUri);

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.set('superSecret', config.secret); // secret variable
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/login', login);
app.use('/admin', admin);
app.use('/static', statics);
app.use('/messages', messages);

io.sockets.on('connection', function(socket) {
  socket.on('message', function (message) {
      console.log('Received message: ' + message);
      io.sockets.emit('pageview', { 'url': message });
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
