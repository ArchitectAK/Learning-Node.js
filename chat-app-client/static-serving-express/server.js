const express = require("express");
const app = express();

app.use(express.static(__dirname));

const messages = [
  {
    name: "Ankit",
    message: "Hello",
  },
  {
    name: "Saif",
    message: "Hello",
  },
];
app.get("/messages", (req, res) => {
  res.send(messages);
});

const server = app.listen(3001, () =>
  console.log(`Server is listening on port ${server.address().port}`)
);
