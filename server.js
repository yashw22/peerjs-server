const { PeerServer } = require('peer');

const peerServer = PeerServer({
    port: process.env.PORT || 9000,
    path: '/deckdetective',
});

console.log('PeerJS server is running...');