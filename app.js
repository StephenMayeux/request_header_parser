var express = require('express');
var app = express();
var useragent = require('express-useragent');
app.use(useragent.express());

app.get('/', function(req, res) {
  var os = req.useragent.os,
      IPAddress = req.ip,
      language = req.headers['accept-language'].split(',')[0];

  res.json({"IP Address": IPAddress,"Language": language, "OS": os});
});

module.exports = app;
