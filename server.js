const PORT = 8080;
const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket)=>{
  console.log("connection made");
});
app.get('/', (req, res) => {
  res.sendfile('./front-end/index.html');
});

app.get('/game', (req, res) => {
  res.sendfile('./front-end/game.html')
});

server.listen(PORT, () =>{
  console.log('server running');
}) 