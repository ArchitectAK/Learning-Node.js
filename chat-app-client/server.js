var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

server.listen(3000, () => {
  console.log("server is listening on port", server.address().port);
});
