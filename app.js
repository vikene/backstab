var express = require('express');
 var stylus = require('stylus')
  var nib = require('nib')

var bodyParser = require('body-parser');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://java:radha@ds061360.mongolab.com:61360/front_stab');
var routes = require('./routes/index');
var app = express()

// initial configuration 
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req,res,next){

        req.db= db;
    next();

});

//routers!!
app.use('/',routes);

app.listen(process.env.PORT || 5000);