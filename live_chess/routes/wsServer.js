var WebSocket = require('ws');
var uuid = require('node-uuid');

/**
 * WebSocket Server
 */

let wss = new WebSocket.Server({ port:'8080' }),
    CLIENTS=[],
    GAME_INITIALIZED = false,
    playerReady = [];

wss.on('connection', async function(ws) {
    ws.id = uuid.v4();
    let mc = await manageClient(ws);

    ws.send(JSON.stringify({"connection accepted": mc}));

    if (!mc) {
        ws.send(JSON.stringify({reason: "max user reached"}));
        ws.close()
        return
    }

    ws.on('message', function(message) {
        console.log('received: %s', message);
        // sendAll(JSON.stringify({message: message}));
        let res = JSON.parse(message);
        if (res.changesCoord) {
            let newPlayer = res.playerTurn === 1 ? 2 : 1,
                newmsg = JSON.stringify({changesCoord: res.changesCoord, playerTurn: newPlayer, removedPieces: res.removedPieces});

            CLIENTS[newPlayer-1].send(newmsg);
        }
        if (res.pawnPromise) {
            let newPlayer = res.pawnPromise.origin === 1 ? 2 : 1;
            CLIENTS[newPlayer-1].send(JSON.stringify({pawnPromise : {coord: res.pawnPromise.coord, piece: res.pawnPromise.piece, removedPieces: res.pawnPromise.removedPieces}}));
        }
        if (res.isReady) {
            console.log("isReady", res.isReady);
            playerReady.push(res.player);
            console.log(playerReady);
            if (playerReady.length == 2) {
                console.log("all ready", "\ngame start");
                sendAll(JSON.stringify({startingPlayer: 1}));
            }
        }
    });

    ws.on('close', function(message) {
        console.log(ws.id+" disconnected");

        removeClient(ws.id);
        sendAll(JSON.stringify({USER_DISCONNECTED: ws.id}));
    });

    console.log(ws.id, "connected");

    sendAll(JSON.stringify({NEW_USER_JOINED: ws.id}));
    sendAll(JSON.stringify({gameStart: CLIENTS.length == 2}));

    if (CLIENTS.length == 2) initGame();
});

function initGame() {
    if (!GAME_INITIALIZED) {
        CLIENTS[0].send(JSON.stringify({player1Color: 'W', player2Color: 'B', player: 1}));
        CLIENTS[1].send(JSON.stringify({player1Color: 'B', player2Color: 'W', player: 2}));
    }
}

async function manageClient(client) {
    try {
        let response = await new Promise((resolve, reject) => {
            if (CLIENTS.length >= 2) {
                reject(0);
            } else {
                console.log("add",client.id);
                client.ord = CLIENTS.length == 0 ? 0 : 1
                CLIENTS.push(client);
                resolve(1)
            }
        });
    
        return response === 1 ? true : false   
    } catch (error) {
        console.log(error);
    }
}

async function removeClient(id) {
    try {
        console.log("remove",id);
        let response = await new Promise((resolve, reject) => {
            var foundId = CLIENTS.findIndex(function (obj) {
                return obj.id == id;
            });
        
            if (foundId >= 0) {
                CLIENTS.splice(foundId, 1);
                resolve(1)
            } else {
                reject(0)
            }
        });

        return response === 1 ? true : false
    } catch (error) {
        console.log(error);
    }
}

function sendAll (message) {
    for (var i=0; i<CLIENTS.length; i++) {
        CLIENTS[i].send(message);
    }
}

module.exports = wss;