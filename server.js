'use strict';

var express = require('express');

var PORT = 8888;

var app = express();
app.get('/', function (req, res) {
  var string = "大漠孤烟直，长河落日圆\\br";
  res.send(string + 'Hello world\\br你好阿！');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
