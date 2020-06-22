// Read file way 1
var fs = require("fs");
fs.readFile("./data.json", "utf-8", (err, data) => {
  console.log(data);
});

// Anaother way to read file
var data = require("./data.json");
console.log(data);
