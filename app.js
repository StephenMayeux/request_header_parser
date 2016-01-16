var express = require('express');
var app = express();
var useragent = require('express-useragent');
app.use(useragent.express());

app.get('/', function(req, res) {
  var os = req.useragent.os,
      language = req.headers['accept-language'].split(',')[0],
      IPAddress = req.headers["x-forwarded-for"];

  if (!IPAddress){
    IPAddress = req.connection.remoteAddress;
  } else {
    var x = IPAddress.split(",");
    IPAddress = x[x.length-1];
  }

  res.json({"IP Address": IPAddress,"Language": language, "OS": os});
});

module.exports = app;
