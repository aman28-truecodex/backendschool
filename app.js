var createError = require('http-errors');
var express = require('express');
var port =process.env.PORT || 3000;
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var BodyParser=require('body-parser');

var indexRouter = require('./routes/index');
var cors=require('cors');
var app = express();
app.use(cors());
app.use(BodyParser.json());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//http://localhost:2020/index
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(port);
console.log('server runninh');
module.exports = app;
