# Chess Game

Simple chess game in full JS

You can use this project on localhost or on a node.js server to use it online
## Usage

Open the 'live_chess' directory into a terminal and install dependencies by running 

```sh
npm i
```

After installing the dependencies, start the project by running :

```sh
npm start
```

App will be available on localhost at specified port in the bin/www file (> defaultPort)

## Multiplayer

Multiplayer WebSocket server will automaticaly start on port 8080

Multiple games can be played in the same time, players are automatically matched

## Note 

The 'ws_server' file is meant to create distant websocket server