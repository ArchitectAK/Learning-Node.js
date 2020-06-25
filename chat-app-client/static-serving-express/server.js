const express = require("express");
const app = express();

app.use(express.static(__dirname));
const server = app.listen(3001, () =>
  console.log(`Server is listening on port ${server.address().port}`)
);
