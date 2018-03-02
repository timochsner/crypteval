const Gdax = require("gdax");
const websocket = new Gdax.WebsocketClient(["BTC-USD"], 'wss://ws-feed.gdax.com', null, {
    "channels": [
        "level2",
    ]
})

websocket.on('message', data => { console.log(data); });
websocket.on('error', err => { /* handle error */ });
websocket.on('close', () => { /* ... */ });