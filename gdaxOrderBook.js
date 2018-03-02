const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient('https://api.gdax.com');

/* Print Copyrights & Title */
var header = require('./header.js');
header.title();

/* ... */
publicClient.getProductOrderBook(
  'ETH-USD',  (error, response, book) => {
	 console.log('##### ETH-USD #####')
     console.log(book)
  }
);


// CALLBACKS = RESPONSE FROM GDAX
const btcCallback = (err, response, data) => {
	console.log('##### BTC-USD #####')
  	console.log(data);
};

// Get the order book at the default level of detail.
const btcResult = publicClient.getProductOrderBook('BTC-USD', btcCallback);






