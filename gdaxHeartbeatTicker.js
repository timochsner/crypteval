const Gdax = require("gdax");

const products = ["ETH-BTC","ETH-USD","BTC-USD","LTC-USD"];

const websocket = new Gdax.WebsocketClient(products, 'wss://ws-feed.gdax.com', null, {
	/* BEGINNING OF MESSAGE */
    "stats":[
        //"heartbeat",
       // "level2",
        	/*{
            "name": "ticker",
            "product_ids": products
        	}*/

    ]
    /* END OF MESSAGE */
})

websocket.on('message', data => { 
	console.log(data);
});

websocket.on('error', err => { 
	console.log(err);
});

websocket.on('close', () => { /* ... */ });