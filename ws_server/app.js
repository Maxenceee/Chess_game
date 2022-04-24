var express = require('express');
var app = express();
var server = require('http').createServer(app);
var WebSocket = require('ws');
var uuid = require('node-uuid');

/**
 * WebSocket Server
 */

 let wss = new WebSocket.Server({ port:'8080' }),
 CLIENTS=[],
 WAITINGPLAYERS = [];

wss.on('connection', async function(ws) {
    ws.id = uuid.v4();

    ws.send(JSON.stringify({"CONNECTION_ACCEPTED": true}));

    ws.on('message', async function(message) {
        console.log('received: %s', message);

        let op = await getOpponent(ws);

        let res = JSON.parse(message);
        if (res.changesCoord) {
            let newPlayer = res.playerTurn === 1 ? 2 : 1,
                newmsg = JSON.stringify({changesCoord: res.changesCoord, playerTurn: newPlayer, removedPieces: res.removedPieces});

            op.send(newmsg);
        }
        if (res.castling) {
            let newPlayer = res.playerTurn === 1 ? 2 : 1,
                newmsg = JSON.stringify({castling: res.castling, playerTurn: newPlayer});

            op.send(newmsg);
        }
        if (res.pawnPromise) {
            op.send(JSON.stringify({pawnPromise : {coord: res.pawnPromise.coord, piece: res.pawnPromise.piece, removedPieces: res.pawnPromise.removedPieces}}));
        }
        if (res.isReady) {
            console.log("isReady", res.isReady, ws.id, ws.opponent);
            ws.isReady = res.isReady;
            ws.username = res.username;

            if (ws.isReady && op.isReady) {
                console.log("all ready", "\ngame start\n");
                ws.send(JSON.stringify({startingPlayer: 1, opponentUsername: op.username}));
                op.send(JSON.stringify({startingPlayer: 1, opponentUsername: ws.username}));
            }
        }
    });

 ws.on('close', async function(message) {
     console.log(ws.id, "disconnected");

     removeClient(ws.id, CLIENTS);
     removeClient(ws.id, WAITINGPLAYERS);
     console.log("number of client", CLIENTS.length);
     let op = await clientByOpponent(ws.id);
     if (op && op != 0) {
         op.send(JSON.stringify({USER_DISCONNECTED: ws.id}));
         WAITINGPLAYERS.push(op);
     }
 });
 
 console.log({NEW_USER_JOINED: ws.id});
 clientConnection(ws);
});

function clientConnection(a) {
 WAITINGPLAYERS.push(a);
 console.log("new waiting", a.id);
 CLIENTS.push(a);
 console.log("number of client", CLIENTS.length);
 if (WAITINGPLAYERS.length == 2) {
     initGame(WAITINGPLAYERS);
     WAITINGPLAYERS = [];
 }
}

function initGame(CL) {
 console.log("init game for", CL[0].id, CL[1].id);
 CL[0].opponent = CL[1].id;
 CL[1].opponent = CL[0].id;
 CL[0].send(JSON.stringify({player1Color: 'W', player2Color: 'B', player: 1}));
 CL[1].send(JSON.stringify({player1Color: 'B', player2Color: 'W', player: 2}));
}

async function getOpponent(a) {
 try {
     let response = await new Promise((resolve, reject) => {
         var foundId = CLIENTS.findIndex(function (obj) {
             return obj.id == a.opponent;
         });
     
         if (foundId >= 0) {
             resolve(CLIENTS[foundId]);
         } else {
             reject(0);
         }
     });

     return response !== 0 ? response : a
 } catch (error) {
     console.info(error);
 }
}

async function clientByOpponent(a) {
 try {
     let response = await new Promise((resolve, reject) => {
         var foundId = CLIENTS.findIndex(function (obj) {
             return obj.opponent == a;
         });
     
         if (foundId >= 0) {
             resolve(CLIENTS[foundId]);
         } else {
             reject(0);
         }
     });

     return response === 0 ? false : response
 } catch (error) {
     console.info(error);
 }
}

async function removeClient(id, l) {
 try {
     let response = await new Promise((resolve, reject) => {
         var foundId = l.findIndex(function (obj) {
             return obj.id == id;
         });
     
         if (foundId >= 0) {
             l.splice(foundId, 1);
             PLAYERSREADY = [];
             resolve(1);
         } else {
             reject(0);
         }
     });

     return response === 1 ? true : false
 } catch (error) {
     console.info(error);
 }
}

function sendAll (message) {
 for (var i=0; i<CLIENTS.length; i++) {
     CLIENTS[i].send(message);
 }
}

server.listen(8080, () => console.log('listening on port : 8080'))