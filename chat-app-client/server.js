var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const mongoose = require("mongoose");

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbUrl = "mongodb://ankit:ankit123@ds343718.mlab.com:43718/learning-nod";

var messages = [
  { name: "Ankit", message: "Hi" },
  { name: "Saif", message: "Hello" },
];

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.post("/messages", (req, res) => {
  console.log(req.body);
  io.emit("message", req.body);
  messages.push(req.body);
  res.sendStatus(200);
});

mongoose.connect(dbUrl, { useMongoCliet: true }, (err) => {
  console.log("Mongodb connection", err);
});

server.listen(3000, () => {
  console.log("server is listening on port", server.address().port);
});
