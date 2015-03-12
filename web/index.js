'use strict';

var express = require('express');
var db = require('mongojs')(process.env.MONGO_URL || 'mongodb://192.168.59.103/test');
var log = db.collection('log');

var app = express();
app.get('/', function(req, res){

  log.save({date: new Date(), host: req.host });

  log.find(function(err, docs){
    if (err) { console.warn(err); }
    res.json(docs); 
  });
});

app.listen(process.env.PORT || 3000, console.log);

