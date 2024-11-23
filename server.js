const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();

app.get("/", (req, res, next) => res.send("Hello world!"));

// =======

const server = app.listen(9000);

const peerServer = ExpressPeerServer(server, {
    path: "/deckdetective",
});

app.use("/peerjs", peerServer);
console.log('PeerJS server is running...');
