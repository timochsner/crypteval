const Gdax = require("gdax");

const products = ["ETH-BTC","ETH-USD","BTC-USD"];

const websocket = new Gdax.WebsocketClient(null, 'wss://ws-feed.gdax.com', null, {
    "channels": [
        "heartbeat",
        	{
            "name": "ticker",
            "product_ids": products
        }

    ]
})

websocket.on('message', data => { console.log(data); });
websocket.on('error', err => { 
	console.log(err);
});
websocket.on('close', () => { /* ... */ });