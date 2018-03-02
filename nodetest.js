const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient('wss://ws-feed.gdax.com');

var http = require('http');

var result = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
});
server.listen(8080);