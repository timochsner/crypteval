const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient('wss://ws-feed.gdax.com');


// RUN AS LOCAL SERVER & LISTEN ON PORT 8080
var http = require('http');

var result = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
});
server.listen(8080);