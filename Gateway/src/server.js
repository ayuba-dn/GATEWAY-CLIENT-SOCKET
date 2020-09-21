const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

let users = 0;
io.on('connection', (socket) => {
  users++;
  console.log('a user connected',users);
  io.emit('user connected',users);
  socket.on('disconnect', () => {
    users--;
    io.emit('user left',users);
    console.log('user disconnected',users);
  });
});

app.get(`/`, (req, res) => {
  res
    .status(200)
    .json({ serverId, message: "GATEWAY Microservice v1.0.0" });
});



http.listen(9000, () => {
  console.log("GATEWAY Microservice running on port 9000");  
}); 
 